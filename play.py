#!/usr/bin/env python3
"""Launcher for FOUNDATION — SCP Site Overseer (terminal edition)."""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from game.main import main  # noqa: E402

if __name__ == "__main__":
    main()
