# Load your data

Suppose you have the following data structure:

```
my-project/
├── data/
│   ├── data1.csv
│   ├── data2.csv
│   └── data3.csv
└── main.py
```

where each data file contains 3 columns separated by a comma.

In `main.py`, you can load your data using the `DataSet` class:

```
from quyckplot import DataSet

data = DataSet.from_files(
    file_names=["data1.csv", "data2.csv", "data3.csv"],
    dir="data",
    names=["x", "y", "z"],
)
```
