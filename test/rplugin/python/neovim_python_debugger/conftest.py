# coding: utf-8
"""
File which handles the configs of the test module
"""
import os
import sys

import pytest

sys.path.append(u'{}/rplugin/python'.format(os.getcwdu()))

import neovim_python_debugger  # pylint: disable=wrong-import-position


@pytest.fixture
def pydebug(mocker):
    vim = mocker.MagicMock()
    plugin = neovim_python_debugger.Main(vim)

    return vim, plugin
