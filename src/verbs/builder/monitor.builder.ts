
/// Monitor builder generates a command that streams incoming notifications from the secondary server to
/// the current client.
/// ```
/// // Receives all of the notifications
///    var builder = MonitorVerbBuilder();
///
/// // Receives notifications for those keys that matches a specific regex
///    var builder = MonitorVerbBuilder()..regex = '.alice';

import { VerbBuilder } from "./verb.builder";

/**
 *  Monitor builder generates a command that streams incoming notifications from the secondary server to
 * the current client.
 * ```ts
 * // Receives all of the notifications
 * var builder = new MonitorVerbBuilder();
 *
 * // Receives notifications for those keys that matches a specific regex
 * var builder = new MonitorVerbBuilder();
 * builder.regex = '.alice';
 * ```
 */
export class MonitorVerbBuilder implements VerbBuilder {
  auth: boolean = true;
  regex?: RegExp | string | null;
  lastNotificationTime?: number | null;

  buildCommand(): string {
        var monitorCommand = 'monitor';
        if (this.lastNotificationTime != null) {
            monitorCommand += `:${this.lastNotificationTime.toString()}`;
        }
        if (this.regex != null) {
            monitorCommand += ` ${this.regex}`;
        }
        monitorCommand += '\n';
        return monitorCommand;
    }

  checkParams(): boolean {
        return true;
    }
}
