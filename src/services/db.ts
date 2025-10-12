import Dexie, { type Table } from "dexie";
import type { LocalEvent } from "../hooks/useEventHistory";

export class MySubClassedDexie extends Dexie {
  events!: Table<LocalEvent, string>; // Explicitly type the primary key as string

  constructor() {
    super("eventDatabase");
    this.version(1).stores({
      events: "&id, title, status, timestamp, hash, image", // Primary key and indexed props
    });
  }
}

export const db = new MySubClassedDexie();
