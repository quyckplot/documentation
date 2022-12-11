---
title: Overview
---

# DataSet

```python
from quyckplot import DataSet
```

:::tip
We recommend you become familiar with the [FileData class](/docs/reference/FileData) before reading this page.
:::

## Overview

This is the main class exported by Quyckplot. Essentially, it is a list of `FileData` instances. It is used to store data from multiple files. Of course, it can also be used to store data from a single file, but in this case, it is not necessary to use this class, since the `FileData` class is sufficient.

## Interface

### Attributes

- `data`: a list of `FileData` instances.

### Methods

- `from_files` (class method): loads data from a file name.
- `from_regex` (class method): loads data from a regular expression.
- `clear`: removes all the data from the dataset.
- `map`: applies a function to all the data in the dataset.
