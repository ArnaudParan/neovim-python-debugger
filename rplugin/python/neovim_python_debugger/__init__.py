# coding: utf-8
"""neovim-python-debugger

This neovim plugin is intended to allow the user to debug python code
easily
"""
import neovim


@neovim.plugin
class Main(object):

    """
    Class representing the whole plugin
    """

    def __init__(self, vim):
        self.vim = vim

    @neovim.command('PydebugPing', sync=True)
    def test_command(self):
        self.vim.command('echo "It works!"')
