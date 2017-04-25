# coding: utf-8
"""
Tests the __init__ of the package
"""
import neovim_python_debugger

def tests_construct(mocker):
    vim = mocker.MagicMock()
    plugin = neovim_python_debugger.Main(vim)

    assert plugin.vim == vim
