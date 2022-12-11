---
title: DataSet.map
---

```python
ds.map(
    func
)
```

Applies a function to each `FileData` instance stored in the `DataSet` instance. This is one of the most useful methods of the `DataSet` class: it is often used to plot the data from each file.

:::tip
`map` is most powerful when used with the `sequence` utility function. See [the documentation for the `sequence` function](/docs/reference/utils/sequence) for more details.
:::

## Parameters

**func: callable**

- The function to apply to each `FileData` instance. The function must take a `FileData` instance as its only argument modify it in place and return nothing.

## Returns

**None**

## Example

```python
ds = DataSet.from_regex(
    "*.csv", # load every csv file in the current directory
    names=["x", "y"], # we assume the files have two columns named "x" and "y"
)

def func(fd):
    fd.data["z"] = 2 * fd.data["x"] # multiply the x column by 2 and put it in a new column named "z"

ds.map(func) # apply the function to each FileData instance
```

:::tip
Python lambda functions are a good way to quickly define a function that you will use only once. See [the documentation for the `lambda` keyword](https://docs.python.org/3/reference/expressions.html#lambda) for more details.
:::
