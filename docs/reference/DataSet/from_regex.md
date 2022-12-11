---
title: DataSet.from_regex
---

:::tip
You should be familiar with regular expressions before using this method. If you are not, you can read [this tutorial](https://www.w3schools.com/python/python_regex.asp) to learn the basics.
:::

```python
FileData.from_regex(
    regex,
    dir="",
    name_format="",
    **kwargs,
)
```

Loads data from a regular expression and builds the context from the matching file names and given format.

## Parameters

**regex: str**

- The regular expression to use to find the files.

**dir: str**

- The directory where the files are located.

**name_format: str**

- The name format of the files. This is used to build the context object from the file names. For example, if the regex matches against the file names `temperature=15K.csv` and `temperature=20K.csv`, and the name format is `temperature={temp}K.csv`, then the context will have the values `"15"` and `"20"` associated to the key `"temp"`.

**kwargs: dict**

- The same keyword arguments as for the `FileData.from_file` method. These are passed to the `FileData.from_file` method for each file. See [the documentation for the `FileData.from_file` method](/docs/reference/FileData/from_file) for more details.

## Returns

**FileData**

- A `FileData` instance that contains the data from the files whose names matched against the regex and the context as built from the file names and the name format.

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
from quyckplot import FileData

ds = DataSet.from_regex(
    regex="height=40m_width=.*.csv",
    dir="data",
    name_format="height=40m_width={width}m.csv",
)
```
