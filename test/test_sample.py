# coding: utf-8
"""
Here is just an example of pytest tests
"""

def inc(to_increment):
    return to_increment + 1

def test_answer():
    assert inc(4) == 5
