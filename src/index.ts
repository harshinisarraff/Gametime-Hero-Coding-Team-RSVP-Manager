import { RsvpService } from "./services/RsvpService";
import { Logger } from "./utils/Logger";

const logger = new Logger();
const rsvpService = new RsvpService(logger);

rsvpService.addOrUpdateRsvp({ id: "1", name: "Teja" }, "Yes");
rsvpService.addOrUpdateRsvp({ id: "2", name: "Harshini" }, "No");
rsvpService.addOrUpdateRsvp({ id: "3", name: "Arjun" }, "Maybe");
rsvpService.addOrUpdateRsvp({ id: "1", name: "Alice" }, "Maybe");

console.log("Confirmed Attendees:", rsvpService.getConfirmedAttendees());
console.log("Counts:", rsvpService.getCounts());
