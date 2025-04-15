import { Player } from "../models/Player";
import { RsvpStatus } from "../models/RsvpStatus";
import { Logger } from "../utils/Logger";

interface RsvpEntry {
  player: Player;
  status: RsvpStatus;
}

export class RsvpService {
  private rsvps: Map<string, RsvpEntry> = new Map();

  constructor(private logger: Logger) {}

  addOrUpdateRsvp(player: Player, status: RsvpStatus): void {
    this.logger.log(`RSVP update: ${player.name} -> ${status}`);
    this.rsvps.set(player.id, { player, status });
  }

  getConfirmedAttendees(): Player[] {
    return Array.from(this.rsvps.values())
      .filter(entry => entry.status === "Yes")
      .map(entry => entry.player);
  }

  getCounts(): { total: number; confirmed: number; declined: number } {
    let confirmed = 0;
    let declined = 0;

    for (const entry of this.rsvps.values()) {
      if (entry.status === "Yes") confirmed++;
      else if (entry.status === "No") declined++;
    }

    return {
      total: this.rsvps.size,
      confirmed,
      declined
    };
  }
}
