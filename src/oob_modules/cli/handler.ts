// Pluto - src/oob_modules/cli/handler.ts
// Written by Brendan Lane - https://brndnln.dev/

import { Command } from 'commander'
import config from '../../configuration/config'

const program = new Command()
program.version(config.cli.version)

program
