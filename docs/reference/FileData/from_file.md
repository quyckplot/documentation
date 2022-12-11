---
title: FileData.from_file
---

```python
FileData.from_file(
    file_name,
    dir="",
    name_format="",
    **kwargs,
)
```

## Parameters

**file_name: str**

- The name of the file to load.

**dir: str**

- The directory where the file is located.

**name_format: str**

- The name format of the file. This is used to build the context object from the file name. For example, if the file name is `temperature=15K.csv`, and the name format is `temperature={temp}K.csv`, then the context will have the value `"15"` associated to the key `"temp"`.

**kwargs: dict**

- Any other keyword arguments are passed to the `pandas.read_csv` function. See the [pandas documentation](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.read_csv.html) for more information. These include:

  - **names: list[str]**

    - The names of the columns in the file.

  - **skiprows: int**

    - The number of rows to skip at the beginning of the file.

  - **sep: str**

    - The separator to use to split the columns.

## Returns

**FileData**

- A `FileData` instance that contains the data from the file and the context as built from the file name and the name format.

## Example

Assume the following file structure:

```
my-project/
├── data/
│   └── height=40m_width=15m.csv
└── main.py
```

If `height=40m_width=15m.csv` has two columns that correspond, respectively, to some time and some displacement, from `main.py`, you can load the with the following code:

```python
from quyckplot import FileData # Import the class

data = FileData.from_file(
    "height=40m_width=15m.csv", # The name of the file
    dir="data", # The directory where the file is located
    name_format="height={height}m_width={width}m.csv", # The name format of the file
    names=["time", "displacement"], # The names of the columns
)

```

It this case, the `data` variable will be a `FileData` instance that contains the data from the file and the following context:

```python
{
    "height": "40",
    "width": "15",
}
```
