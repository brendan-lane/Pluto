// Pluto - bot/modules/client/Client.ts
// Written by Brendan Lane - https://brndnln.dev/

import { AkairoClient, CommandHandler, InhibitorHandler, ListenerHandler } from 'discord-akairo'
import config from './../../config.js'

export class CustomClient extends AkairoClient {
  commandHandler: CommandHandler
  inhibitorHandler: InhibitorHandler
  listenerHandler: ListenerHandler

  constructor () {
    // Setup custom client
    super({
      // Options for Akairo
      ownerID: config.ownerid
    }, {
      // Options for Discord
      disableMentions: 'everyone'
    })

    // Command Handler
    this.commandHandler = new CommandHandler(this, {
      directory: './bot/modules/commands/',
      extensions: [
        '.js'
      ],
      prefix: config.prefix,
      allowMention: true
    })
    this.commandHandler.loadAll()

    // Inhibitor Handler
    this.inhibitorHandler = new InhibitorHandler(this, {
      directory: './bot/modules/inhibitors/',
      extensions: [
        '.js'
      ]
    })

    this.commandHandler.useInhibitorHandler(this.inhibitorHandler)
    this.inhibitorHandler.loadAll()

    // Listener Handler
    this.listenerHandler = new ListenerHandler(this, {
      directory: './bot/modules/listeners/',
      extensions: [
        '.js'
      ]
    })

    this.commandHandler.useListenerHandler(this.listenerHandler)
    this.listenerHandler.loadAll()
  }
}
