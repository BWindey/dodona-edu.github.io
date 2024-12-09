---
title: Reference for advanced test suites
description: "Create advanced test suites for TESTed"
order: 3
---

# Advanced test suite reference

:::warning Advanced test suites vs. DSL test suites
This is the reference guide for advanced test suites, written in JSON.
In most cases, you should prefer using the [DSL test suites](/en/references/tested/dsl) (written in YAML).

This format is mostly useful if:
- You generate the test suite programmatically. In this case, JSON might be easier than YAML to write.
- You need to do something that is not supported by the DSL test suite format.
:::

In TESTed, a test suite specifies which test cases are executed against a submission.
TESTed differs from other test frameworks in that its test suites are independent of any programming language.
As a result,
a single test suite is sufficient to check submissions for the same exercise in different programming languages.

[This Python module](https://github.com/dodona-edu/universal-judge/blob/master/tested/testsuite.py) formally specifies the TESTed test suite format.
The module can also generate a JSON Schema to make the validation of test suites easier.
The [source code repository](https://github.com/dodona-edu/universal-judge/tree/master/tests/exercises) for TESTed contains a number of examples of test suites.

The first section of this reference describes the structure of the test suite.
A dot notation is used to indicate where the attribute is located in the hierarchical structure.
A star (`*`) is used to indicate a list of objects.
For example, `.tabs.*.contexts.*.testcases.*.description` can roughly be converted to json like this:

```json5
{                         // <root>
 tabs: [                  // .tabs
  {                       // .tabs.*
   contexts: [            // .tabs.*.contexts
    {                     // .tabs.*.contexts.*` 
     testcases: [         // .tabs.*.contexts.*.testcases
       {                  // .tabs.*.contexts.*.testcases.*
         description: "1" // .tabs.*.contexts.*.testcases.*.description
       }
     ]
    }
   ]
  }
 ]
}
```

In the sections after that, some aspects are discussed in more detail.

## `<root>`

Root object of a test suite.
Since this object is not named in a test suite, we ignore it in all titles below.

### `.namespace`

The name of the submission file (`<namespace>.<ext>`).

The `namespace` is also used as the namespace of the code.
The default namespace is `submission`.
For example, Java submissions must include a class called `Submission`.

:::tip Hint
You should use `snake_case` for the namespace,
as it enables using the right style convention for each programming language.
:::

## `.tabs.*`

A list of all tabs that will be executed.

The tabs in a test suite correspond with the visual grouping of test cases into tabs on Dodona.
A tab contains a list of the contexts.

### `.name`

The name of the tab; displayed on Dodona.

### `.hidden`

A boolean indicating if the tab must be hidden when all its test cases succeed.

## `.tabs.*.contexts.*`

A list of contexts to be executed.
A context is a set of test cases that are executed together, and optionally depend on each other.
For example, if you save the result of a function call in a variable and wish to use that variable later, these test cases must be in the same context.

### `.before`

An object whose keys are programming languages.
The corresponding values are [TextData](#textdata) objects that are executed before the test cases.

### `.after`

An object whose keys are programming languages.
The corresponding values are [TextData](#textdata) objects that are executed after the test cases.

### `.description`

A description of the context as displayed by Dodona.
When no description is given, it will be automatically generated.

### `.link_files.*`

A list of files that must be linked in the feedback on Dodona.
Each object is used to enable file linking in the feedback.

#### `.link_files.*.name`

The name of a file.
All exact matches of the filename will be linked to the content.

#### `.link_files.*.content`

The URL of a text file (usually a relative URL to a file in the description directory of the exercise).

#### `.link_files.*.location`

The type of content.
Currently, the only value supported is `href`, which is also the default value.
This attribute is only included for legacy reasons and may become deprecated in the future.

#### `.link_files.*.storage`

The storage method of the content.
Currently, the only value supported is `disk`, which is also the default value.
This attribute is only included for legacy reasons and may become deprecated in the future.

## `.tabs.*.contexts.*.testcases.*`

A test case is a statement or an expression that will be executed and evaluated.
Each context has at least one test case.
The following two constraints apply:

- Only the first test case may have a "main call", i.e. command line arguments or _stdin_.
- Only the last test case may have a test for the program's exit code.

Do note that the first and last test case may be the same one:
if you only have one test case, it may be a main call and have a check for the exit code.

### `.input`

The input for a test case can always be a statement or an expression
(see [Statements and expressions](#statements-and-expressions)).

However, if this is the first test case, the input may also be the "main" input, using the properties described below.
If using the "main" input, at least one of the properties below is required.

#### `.input.stdin`

The content that is made available on standard input.
This can either be an ([EmptyChannel](#emptychannel)) object,
or a [TextData](#textdata) object providing the path name of a text file or a string containing the content.

#### `.input.arguments`

A list of string arguments that are passed when executing the submission.
If left out, an empty list is used.

#### `.input.main_call`

If there is no `stdin` and there are no arguments,
but you still want to have a "main" input, you can set this field to `True`.

### `.description`

A description of the test case to be displayed by Dodona.
When no description is given, it will be automatically generated by TESTed based on the input for this test case.
In most cases, you will probably want to use the automatically generated description.

### `.output`

The output object contains all tests for the given test case.

Note that you can only use the test for the exit code if this is the last test case in the context.

#### `.output.stdout`

The output channel for standard output.
Possible output channels are:

- [EmptyChannel](#emptychannel) (default): No output is expected on this channel.
  This is the default option.
- [IgnoredChannel](#ignoredchannel): No output is expected on this channel, but generated output is ignored.
- [TextOutputChannel](#textoutputchannel): Expected output on this channel.

#### `.output.stderr`

The output channel for standard error.
Possible output channels are:

- [EmptyChannel](#emptychannel) (default): No output is expected on this channel.
- [IgnoredChannel](#ignoredchannel): No output is expected on this channel, but generated output is ignored.
- [TextOutputChannel](#textoutputchannel): Expected output on this channel.

#### `.output.file`

The output channel for a file.
Possible output channels are:

- [IgnoredChannel](#ignoredchannel) (default): No output is expected on this channel, but generated output is ignored.
- [FileOutputChannel](#fileoutputchannel): Expected output on this channel.

_**Note:**_ TESTed currently supports at most one expected file for each execution of the submission.
Additionally, there is currently no way to check that _no_ files were generated.

#### `.output.exception`

The output channel for an exception.
The possible channels are:

- [EmptyChannel](#emptychannel) (default): No exception is expected.
- [IgnoredChannel](#ignoredchannel): No exception is expected, but any exceptions raised are ignored.
- [ExceptionOutputChannel](#exceptionoutputchannel): Expected exception.

#### `.output.result`

The output channel for the result of an expression.
The possible channels are:

- [EmptyChannel](#emptychannel) (default): No result is expected.
- [IgnoredChannel](#ignoredchannel): No exception is expected, but any exceptions raised are ignored.
- [ValueOutputChannel](#valueoutputchannel): The expected result of the expression.

#### `.output.exit_code`

The output channel for the exit code of the submission.
The possible channels are:

- [IgnoredChannel](#ignoredchannel) (default): Exit code is not checked.
- [ExitCodeOutputChannel](#exitcodeoutputchannel): Allows you to specify the expected exit code.

## TextData

A `TextData` object represents textual data.

### `.type`

The type of data: `text` or `file`.
If `type` is `text`, the `.data` is interpreted as the textual data itself.
If `type` is `file`, the `.data` is interpreted as the pathname of a text file in the workdir directory of the judge
that contains the textual data.

### `.data`

A string.

## Channels

The output channels represent all possible side effects of executing the submission.
Here's an overview of all output channels currently supported by TESTed:

### EmptyChannel

An `EmptyChannel` describes that no output is expected on a specific file descriptor (e.g. _stdout_ or _stderr_).
Any output generated will be considered as incorrect by TESTed.
The `EmptyChannel` is represented by a string constant `none`.

For example, disallowing any output on standard output:

```json
{
 "output": {
  "stdout": "none"
 }
}
```

For most output types, this is the default value, meaning you don't need to specify it.

### IgnoredChannel

An IgnoredChannel object describes that no output is expected on a specific file descriptor (e.g. _stdout_ or _stderr_).
Any output generated on the file descriptor will be ignored, and is considered correct by TESTed.
In other words, if you do not want output, you should use [`EmptyChannel`](#emptychannel),
while if you don't care about the output, you should use `IgnoredChannel`.
The `EmptyChannel` is represented by a string constant `ignored`.

For example, ignoring any output on standard output:

```json
{
 "output": {
  "stdout": "ignored"
 }
}
```

### ExceptionOutputChannel

An `ExceptionOutputChannel`describes an expected exception, thrown upon executing the submission by an error message and
an evaluator used to evaluate the exception.
It is represented by an object with two attributes.

For example, if you require an error with the message `"Error"`:

```json
{
 "output": {
  "exception": {
   "exception": {
    "message": "Valid exceptions"
   }
  }
 }
}
```

Since evaluating anything more than the exception message requires programming-language-specific code,
TESTed supports the concept of "oracles".
This is a function you can write,
which will be called by TESTed to evaluate whether a thrown exception is the correct one.
See the attribute documentation below or the [Oracles section](#oracles) for more information.

For example, requiring a `assertion` exception, in an exercise supporting `Python`, `Java` and `Haskell`:

```json
{
 "output": {
  "exception": {
   "exception": {
    "message": "Some assertions went wrong"
   },
   "oracle": {
    "type": "specific",
    "functions": {
     "python": {
      "file": "evaluator.py"
     },
     "java": {
      "file": "Evaluator.java"
     },
     "haskell": {
      "file": "Evaluator.hs"
     }
    }
   }
  }
 }
}
```

#### `.exception.message`

An object representing an expected error message.

#### `.oracle`

The oracle to use to determine whether the exception is valid or not.
TESTed currently supports the following two oracles:

- [GenericExceptionOracle](#genericexceptionoracle) (default): Built-in oracle for exceptions.
  **Note:** Only the error message (not the exception type) is evaluated with the built-in oracle.
- [SpecificOracle](#specificoracle): An oracle in the programming language of the submission.

### ExitCodeOutputChannel

An `ExitCodeOutputChannel` object describes the expected exit code of the executed submission.

For example, if you require an exit code of -25:

```json
{
 "output": {
  "exit_code": {
   "value": -25
  }
 }
}
```

::: warning
When the expected and actual exit codes are both `0`, no feedback is generated on this output channel.
:::

#### `.value`

The expected exit code as an integer.

### FileOutputChannel

A `FileOutputChannel` is used to represent a file created upon executing the submission.

::: warning
Currently, these are some known limitations for testing file creation:

- Only a single file can be evaluated per test case.
- Only text files are supported (no binary files).
  :::

For example, if a generated file `generated-by-submission.txt` must be identical to a sample file `correct-sample-file.txt`:

```json
{
 "output": {
  "file": {
   "expected_path": "correct-sample-file.txt",
   "actual_path": "generated-by-submission.txt"
  }
 }
}
```

#### `.expected_path`

A path to the file containing the expected output.
The path is relative to the `evaluation` directory.

#### `.actual_path`

A path to the location where the submission must create a file.
The path is relative to the submission.
For example, `./subfolder/some-file.txt` requires the submission to create a file called `some-file.txt` in a folder called `subfolder`, in the current working directory.


#### `.oracle`

An oracle used to evaluate the generated text file.
TESTed currently supports the following two oracles:

- [GenericTextOracle](#generictextoracle)(default): Built-in oracle for text and text files.
- [ProgrammedOracle](#programmedoracle): A custom oracle.

### TextOutputChannel

A `TextOutputChannel` object represents text that is expected to be generated on an output channel (e.g. _stdout_ or
_stderr_).

For example, if the text `"Hello world"` must be written to `stdout`:

```json
{
 "output": {
  "stdout": {
   "data": "Hello world",
   "type": "text"
  }
 }
}
```

It is also possible to use a file containing the expected output:

```json
{
 "output": {
  "stdout": {
   "data": "./expected-output.txt",
   "type": "file"
  }
 }
}
```

#### `.type`

Similar to the `.type` attribute of the [`TextData` object](#textdata).
The type of data: `text` or `file`.
If `type` is `text`, the `.data` is interpreted as the textual data itself.
If `type` is `file`, the `.data` is interpreted as the pathname of a text file in the workdir directory of the judge
that contains the textual data.

#### `.data`

Similar to the `.data` attribute of the [`TextData` object](#textdata).
A string.

#### `.oracle`

An oracle used to evaluate the generated text.
TESTed currently supports the following two oracles:

- [GenericTextOracle](#generictextoracle)(default): Built-in oracle for text and text files.
- [ProgrammedOracle](#programmedoracle): A custom oracle.

### ValueOutputChannel

A `ValueOutputChannel` object represents the value obtained upon evaluating the expression of the test case.

For example, if a function call must produce a list with two strings (`"a"` and `"c"`):

```json
{
 "output": {
  "result": {
   "value": {
    "data": [
     {
      "data": "a",
      "type": "text"
     },
     {
      "data": "c",
      "type": "text"
     }
    ],
    "type": "sequence"
   }
  }
 }
}
```

#### `.value`

The expected value.
See [Statements and expressions](#statements-and-expressions) to learn how values must be described.

::: warning
The expected value must be a literal value, and can not be a function call or a variable.
:::

#### `.oracle`

An oracle used to evaluate the generated value.
TESTed currently supports the following three oracles:

- [GenericValueOracle](#genericvalueoracle) (default): Built-in oracle that compares the generated value with
  the expected value.
- [ProgrammedOracle](#programmedoracle): A custom oracle that is independent of the programming language of the
  submission.
- [SpecificOracle](#specificoracle): A custom oracle that depends on the programming language of the
  submission.

::: warning
The first two oracle only support datatypes that are also [supported by TESTed](#data-types).
To support custom datatypes, you must use a `SpecificOracle`.
:::

## Oracles

There are two ways of checking test results in TESTed.
Both involve implementing or using a "check function",
which is the code that receives the results from the submission and must decide if it is correct or not.

There are two ways to achieve this:

1. The programming-language-independent way.
   Here you only need one check function, regardless of the number of programming languages your exercise supports.
   Internally, the test results will be serialized and deserialized by TESTed before calling the check function.
   Some functions are built-in to TESTed and are ready to use.
   These mainly cover basic tests, such as stdout, stderr, return values, etc.
   In other cases, such as testing with randomness, you will need to implement the check function yourselves
   (but only once, in a programming language of your choice).
2. Using language-specific checks.
   Here, you need to provide a check function in each programming language you want your exercise to support.
   Since these are executed together with the submission,
   they are not limited by the serialization process.
   This means you can test programming-language-specific aspects, such as custom datatypes,
   but you will need to provide a check function for every programming language.

For the programming-language-independent way,
you can either use one of the built-in check functions or provide your own.

In a test suite, this translates to three kinds of oracles:

1. "Generic oracles" for the built-in check functions.
2. [`SpecificOracle`](#specificoracle) for a custom check function using the programming-language-independent way.
3. [`ProgrammedOracle`](#programmedoracle) for custom check functions that are programming language specific.

Each oracle has an attribute `.type` with the internal type of the oracle.
Generic oracles also have an attribute `.name` with the internal name of the oracle.

### GenericExceptionOracle

A `GenericExceptionOracle` object contains all the necessary information to use the built-in oracle for
exceptions.

:::warning
This oracle only evaluates error messages.
It does not take into account exception types because of their programming language dependencies.
:::

For example, an [`ExceptionOutputChannel`](#exceptionoutputchannel) with the generic oracle:

```json
{
 "output": {
  "exception": {
   "exception": {
    "message": "Valid exceptions"
   },
   "oracle": {
    "type": "builtin",
    "name": "exception"
   }
  }
 }
}
```

Note that you never have to actually specify the example above, since the generic oracle is the default value.

#### `.type`

A string with constant value `builtin`.

#### `.name`

A string with constant value `exception`.

#### `.options`

The *GenericExceptionOracle* does not support any options at the moment.

### GenericValueOracle

A `GenericValueOracle` object contains all the necessary information to use the built-in oracle for values.

For example, a [`ValueOutputChannel`](#valueoutputchannel) with the generic oracle:

```json
{
 "output": {
  "result": {
   "oracle": {
    "type": "builtin",
    "name": "value"
   },
   "value": {
    "data": [
     {
      "data": "a",
      "type": "text"
     },
     {
      "data": "c",
      "type": "text"
     }
    ],
    "type": "sequence"
   }
  }
 }
}
```

#### `.type`

A string with constant value `builtin`.

#### `.name`

A string with constant value `value`.

#### `.options`

The *GenericValueOracle* does not support any options at the moment.

### GenericTextOracle

A `GenericTextOracle` object contains all the necessary information to use the built-in oracle for textual data.

#### `.type`

A string with constant value `builtin`.

#### `.name`

A string with constant value `text` or `file`.

#### `.options`

By default, exact matching is used to compare a generated text with an expected text.
The following options can be used to adjust the matching behaviour:

- `ignoreWhitespace`: Ignore leading and trailing whitespace.
- `caseInsensitive`: Ignore differences between uppercase and lowercase.
- `tryFloatingPoint`: Try to compare the text as floats.
- `applyRounding`: Apply rounding when comparing text as floats.
- `roundTo`: Precision of floating points when rounding numbers. Mandatory option when rounding is applied.

### ProgrammedOracle

A `ProgrammedOracle` object contains all the necessary information to use a custom oracle for values that works
independent of the programming language of the submission.

A programmed oracle (also called a custom check function) is always written in Python,
regardless of the programming language of the submission.

For example, using a programmed oracle for the return value:

```json
{
 "output": {
  "result": {
   "value": {
    "type": "text",
    "data": "input-3"
   },
   "oracle": {
    "type": "programmed",
    "function": {
     "file": "evaluator.py",
     "name": "evaluate_value"
    }
   }
  }
 }
}
```

#### `.type`

A string with constant value `programmed`.

#### `.function`

An [`EvaluationFunction`](#evaluationfunction-programmed) object that represents the custom evaluation function.

#### `.arguments.*`

A list of arguments that are passed when calling the evaluation function (see [EvaluationFunction](#evaluationfunction-programmed)
and [Statements and expressions](#statements-and-expressions)).

### SpecificOracle

A `SpecificOracle` object contains all the necessary information to use a custom oracle for values that depends on
the specific programming language of the submission.

For example, using a specific oracle for the return value:

```json
{
 "output": {
  "result": {
   "oracle": {
    "type": "specific",
    "functions": {
     "python": {
      "file": "evaluator.py"
     },
     "java": {
      "file": "Evaluator.java"
     },
     "haskell": {
      "file": "Evaluator.hs"
     },
     "c": {
      "file": "evaluator.c"
     },
     "javascript": {
      "file": "evaluator.js"
     }
    }
   }
  }
 }
}
```

#### `.type`

A string with constant value `specific`.

#### `.functions`

An object mapping programming languages onto a [`EvaluationFunction`](#evaluationfunction-specific) object that represents the
custom evaluation function for that programming language.
The keys of the objects are strings, e.g. `"python"` or `"java"`.

Each object has the following fields:

- `.file`: The path name of the source code relative to the evaluation directory of the exercise. The source code must at least define the custom oracle function.
- `.name`: The name of the custom oracle function, with a default value of `evaluate`.

::: danger
A submission cannot be evaluated if there is no oracle function associated with its programming language.
For example, in the fragment above, the exercise will not be solvable in Kotlin.
:::

### EvaluationFunction (programmed)

An `EvaluationFunction` object represents a function that can be called as an oracle function.

The first argument of the check function is always a `ConvertedOracleContext`.
This object has a few attributes:

- `expected`: the expected value of the oracle as defined by the key `value` in the test suite
- `actual`: the value that was actually generated by the submission
- `execution_directory`: path to the folder where the submission was judged
- `evaluation_directory`: path to the `evaluation` folder of the exercise (that contains the test suite)
- `programming_language`: the programming language of the submission
- `natural_language`: the natural language of the user that submitted this submission

The other arguments are the same as the `arguments` attribute from the test suite.
In this example, the check function would have three arguments: the context and the two numbers from the test suite.

It must return a [`EvaluationResult`](#evaluationresult).

For example:

```python
from evaluation_utils import EvaluationResult, Message

def evaluate_test(context):
    return EvaluationResult(
      result=True,
      dsl_expected=repr("hallo"),
      dsl_actual=repr("hallo"),
      messages=[Message(
        description="Hallo",
        format="html",
        permission="staff"
      )]
    )
```

A programmed evaluation function must always be written in Python, regardless of the programming language of the submission.


### EvaluationFunction (specific)

When used with a programming-language-specific oracle, the oracle function takes one argument:

- `actual`: the actual return value, produced by the submission

It must also return a [`EvaluationResult`](#evaluationresult).

For example, the oracle function for a programming-language-specific oracle:

::: code-group

```c [C]
#include <string.h>
#include <stdbool.h>

#include "evaluation_result.h"

EvaluationResult* evaluate(char* actual) {
    bool result = !strcmp("correct", actual);
    EvaluationResult* r = create_result(1);
    r->result = result;
    r->readableExpected = "correct";
    r->readableActual = actual;
    r->messages[0] = create_message("Hallo", NULL, NULL);
    return r;
}
```

```haskell [Haskell]
{-# LANGUAGE ScopedTypeVariables #-}
module Evaluator where

import EvaluationUtils
import Control.Exception

evaluate :: String -> EvaluationResult
evaluate value  =
    let correct = if value == "correct" then True else False
    in evaluationResult {
        result = correct,
        readableExpected = Just "correct",
        readableActual = Just value,
        messages = [message "Hallo"]
    }
```

```java [Java]
import java.util.*;

public class Evaluator {
    public static EvaluationResult evaluate(Object actual) {
        var correct = "correct".equals(actual);
        return EvaluationResult.builder(correct)
                .withReadableExpected("correct")
                .withReadableActual(actual != null ? actual.toString() : "")
                .withMessage(new EvaluationResult.Message("Hallo"))
                .build();
    }
}
```

```javascript [JavaScript]
function evaluate(actual) {
  const correct = actual === "correct";
  return {
    "result": correct,
    "readable_expected": "correct",
    "readable_actual": actual.toString(),
    "messages": [{ "description": "Hallo", "format": "text" }]
  }
}

exports.evaluate = evaluate;
```

```kotlin [Kotlin]
class Evaluator {
    companion object {
        @JvmStatic
        fun evaluate(actual: Any?): EvaluationResult {
            return EvaluationResult.Builder(
                result = "correct" == actual,
                readableExpected = actual.toString(),
                readableActual = actual?.toString() ?: ""
            )
                .withMessage(EvaluationResult.Message("Hallo"))
                .build()
        }
    }
}
```

```python [Python]
from evaluation_utils import EvaluationResult, Message


def evaluate(actual):
    correct = actual == "correct"
    return EvaluationResult(correct, "correct", actual, [Message("Hallo")])
```

:::

### EvaluationResult

The result of an oracle function.
In most languages, TESTed provides utilities to create a correct return type.
In other languages, you must return an object with the correct attributes.

The following fields are present:

- `result`: the result of the check. Either a `boolean` or an advanced result object, with the following fields:
    - `.enum`: the actual result (useful statuses include `compilation error`, `correct`, `wrong`, `internal error`).
      Check the Dodona docs for more information on the status.
    - `.human`: an optional human-readable description of the status.
      This allows you to give more information.
- `readable_expected`: a human-readable representation (string) of the expected value
- `readable_actual`: a human-readable representation (string) of the actual value
- `messages`: an optional list of additional messages to display

## Statements and expressions

TESTed supports a restricted language to describe expressions and statements in a generic way.
The language contains literal values (and their data types), variables, assignments, object construction and
function/method calls.

### Assignment

Variable assignment is the only statement that is currently supported by TESTed.
An assignment is represented by an object.

For example, assigning the result of a function call to a variable called `codes01`:

```json
{
 "input": {
  "type": "integer",
  "variable": "codes01",
  "expression": {
   "type": "function",
   "name": "echo",
   "arguments": []
  }
 }
}
```

#### `.variable`

The name of the variable.
Generally, safe characters are ASCII letters and numbers, as well as an underscore.
Other characters may limit in which programming languages the test suite is usable.

::: tip
It is recommended to use `snake_case` for the variable name.
This way, TESTed will transform it into the correct convention for each programming language.
:::

#### `.expression`

The [expression](#expressions) that is assigned to the variable.

#### `.type`

The [data type](#data-types) of the variable.

### Expressions

TESTed currently supports three different kinds of expressions:
[identifiers](#identifier), [function calls](#function-call) and [literal values](#literal-values).

#### Identifier

An identifier is a string that represents a variable.

For example, to use a previously defined variable:

```json
{
 "input": {
  "type": "integer",
  "variable": "codes01",
  "expression": "previously_defined_variable"
 }
}
```

#### Function call

A `FunctionCall` object represents a function call, a method call, a constructor or an object property

For example, calling a top-level function:

```json
{
 "input": {
  "type": "function",
  "name": "echo",
  "arguments": [
   {
    "type": "text",
    "data": "input-1"
   }
  ]
 }
}
```

Calling the method `the_method` on an object instance called `some_object`:

```json
{
 "input": {
  "type": "function",
  "namespace": "some_object",
  "name": "the_method",
  "arguments": [
   {
    "type": "text",
    "data": "input-1"
   }
  ]
 }
}
```

Accessing the property `property` on an object instance called `some_object`:

```json
{
 "input": {
  "type": "property",
  "namespace": "some_object",
  "name": "the_method"
 }
}
```

##### `.type`

Indicates the type of "function call".
TESTed supports three kinds of function calls:

- `function`: a function or method
- `constructor`: an object constructor
- `property`: an object property

The name of the object is given as the `.namespace` attribute.
Not providing a namespace means the global namespace will be used.
For example, not providing a namespace for a property call will use global variables instead.

##### `.namespace`

The object or namespace on which the function, method or property should be called.
Not providing a namespace means the global namespace will be used.
For example, not providing a namespace for a property call will use global variables instead.

##### `.arguments.*`

An array of expressions or `NamedArguments` that are passed as arguments when calling the function, method or
constructor.

The result of any given expression is passed to the function as a positional argument.

A named argument represents an argument that is passed to a specific function parameter, identified by its name, when
calling a function.
While in many programming languages, the order of named arguments is of no consequence, the order does matter in TESTed.
Named arguments are converted to positional arguments for programming language that lack support for named arguments.
Their position is determined by their position in the array of arguments.

A `NamedArguments` object has two attributes:

- `name`: The parameter name.
- `value`: The value of the argument, which must be an [expression](#expressions).

For example, a function call in which the first argument is positional, while the second argument is a named argument:

```json
{
 "input": {
  "type": "function",
  "name": "echo",
  "arguments": [
   {
    "type": "text",
    "data": "input-1"
   },
   {
    "name": "separator",
    "value": {
     "type": "text",
     "data": "-"
    }
   }
  ]
 }
}
```

#### Literal values

Any value that has a [supported data type](#data-types) can be written as a literal.
These are divided into six kinds of literal values, depending on how the value is encoded in JSON.

The six kinds are [numbers](#numbers), [text](#strings),
[booleans](#booleans), [sequences](#sequences), [dictionaries](#dictionaries) and ["nothing"](#nothing).

Each literal value is represented by a JSON object with two properties:

- `type`: the [data type](#data-types) of the value
- `data`: the value, encoded in JSON

##### Numbers

Numbers are encoded as a numeric JSON value, or one of the following special string constants:

- `nan`: special code for "Not a Number" (NaN)
- `inf`: +∞
- `-inf`: -∞

For example, an integer would be:

```json
{
 "type": "integer",
 "value": 10
}
```

Infinity would be represented as:

```json
{
 "type": "integer",
 "value": "inf"
}
```

##### Strings

Strings are encoded as a JSON string.

For example:

```json
{
 "type": "text",
 "value": "Hello World"
}
```

##### Booleans

Booleans are encoded using JSON booleans.

For example:

```json
{
 "type": "boolean",
 "value": true
}
```

##### Sequences

Sequences are encoded as a JSON list.
Each element of the list is again an [expression](#expressions).

For example, a set with one literal element:

```json
{
 "type": "set",
 "value": [
  {
   "type": "boolean",
   "value": true
  }
 ]
}
```

##### Dictionaries

Objects are encoded using a list of key-value pairs.
A key-value pair is an object with two properties:

- `key`: an [expression](#expressions) representing the key
- `value`: an [expression](#expressions) representing the value

We cannot use a JSON object, since some programming languages support objects/maps/dicts where the keys are not just strings.
For example, an object where the key is a list (`[5]`), and the value a boolean (`false`):

```json
{
 "type": "map",
 "value": [
  {
   "key": {
    "type": "list",
    "value": [
     {
      "type": "integer",
      "value": 5
     }
    ]
   },
   "value": {
    "type": "boolean",
    "value": false
   }
  }
 ]
}
```

##### Nothing

Nothing is represented as JSON `null`.

For example:

```json
{
 "type": "nothing",
 "value": null
}
```

### Data types

TESTed supports three different kinds of data types: [basic data types](#basic-types),
[advanced data types](#advanced-types) and [custom types](#custom-types).

A complete list of all supported data types and their mapping to the different programming languages can be found [here](/en/references/tested/types).

#### Basic types

Basic types represent abstract data types such as integers, not specific implementations thereof like unsigned 8-bit
integers.
They are used as the default data type for a concept in a specific programming language,
but each programming language can have multiple data types that map to the concept represented by a basic type.

See [_Data type support in TESTed_](/en/references/tested/types#basic-types) for a list of types.

#### Advanced types

Advanced types represent specific implementations of data types, like unsigned 8-bit integers.
Each advanced type corresponds to at most one data type in a programming language,
and some programming languages will not have support for specific implementations.

See [_Data type support in TESTed_](/en/references/tested/types#advanced-types) for a list of types.

#### Custom types

TESTed has limited support for using custom types.
The "data" of this type will be outputted verbatim in the various programming languages.
A custom value is indicated with the type `"custom"`.

::: danger
As custom types are outputted verbatim, it is difficult to use them while still keeping the test suite
programming-language-independent.
For that reason, we strongly discourage using them.
:::
