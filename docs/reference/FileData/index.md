---
title: Overview
---

# FileData

```python
from quyckplot import FileData
```

## Overview

This is the most basic data holder class that Quyckplot exports. It is used to store data from a single file (see [the DataSet class](/docs/reference/DataSet) to store data from multiples files). Most of the time, you will not need to use this class directly, but it is useful to know about it because it is the base class for the other data classes.

## Interface

### Attributes

- `data`: a pandas dataframe that contains the actual data.
- `context`: a dictionary that contains some context about the data. This is useful to store metadata about the data, such as the name of the file from which it was loaded, the units of the data, etc. The keys and the values are all strings.

### Methods

- `from_files` (class method): loads data from a file name.
