# coding: utf-8
"""
Tests the __init__ of the package
"""


def tests_construct(pydebug):
    vim, plugin = pydebug

    assert plugin.vim == vim


def test_test_command(pydebug):
    vim, plugin = pydebug
    plugin.test_command()

    vim.command.assert_called_once_with('echo "It works!"')
