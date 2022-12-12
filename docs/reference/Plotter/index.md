---
title: Overview
---

# Plotter

```python
from quyckplot import Plotter
```

## Overview

This class is used to plot a `FileData` instance. Most of the time, it is used on a `DataSet` instance through the `map` method. It also provides a few default styles and helper methods.

## Interface

### Methods

- `start_session` (class method): This needs to be called at the beginning of your script when you are going to use the `Plotter` class.
- `end_session` (class method): This needs to be called at the end of your script when you are done using the `Plotter` class.
- `new_plot`: Creates a new plot window.
