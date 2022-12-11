---
title: DataSet.from_files
---

```python
DataSet.from_files(
    file_names,
    dir="",
    name_format="",
    **kwargs,
)
```

## Parameters

**file_names: list[str]**

- The names of the files to load.

**dir: str**

- The directory where the files are located.

**name_format: str**

- The name format of the files. This is used to build the context object from the file names. For example, if the file names are `temperature=15K.csv` and `temperature=20K.csv`, and the name format is `temperature={temp}K.csv`, then the context will have the values `"15"` and `"20"` associated to the key `"temp"`.

**kwargs: dict**

- The same keyword arguments as for the `FileData.from_file` method. These are passed to the `FileData.from_file` method for each file. See [the documentation for the `FileData.from_file` method](/docs/reference/FileData/from_file) for more details.

## Returns

**DataSet**

- A `DataSet` instance that contains an array of `FileData` instances with the data from the files and the context as built from the file names and the name format.

## Example

Assume the following file structure:

```
my-project/
├── data/
│   ├── height=40m_width=15m.csv
|   ├── height=40m_width=20m.csv
│   └── height=40m_width=25m.csv
└── main.py
```

Then, the following code will load the data from the three files:

```python
from quyckplot import DataSet

ds = DataSet.from_files(
    file_names=[
        "height=40m_width=15m.csv",
        "height=40m_width=20m.csv",
        "height=40m_width=25m.csv",
    ],
    dir="data",
    name_format="height={height}m_width={width}m.csv",
)
```

Loads data from a list of files and builds the context from the given file names and name format.

:::tip
In this case, instead of manually specifying the file names, you could use a list comprehension to generate the file names from a list of heights and widths:

```python
file_names = [f"height=40m_width={width}m.csv" for height in [15, 20, 25]]
```

:::

:::tip
Even better, you could (and should) use the `DataSet.from_regex` method instead of `DataSet.from_files`. This will allow you to use regular expressions to match the file names and extract the context from them. See the [DataSet.from_regex](./from_regex.md) documentation for more information.
:::
