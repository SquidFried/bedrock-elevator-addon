import { world } from "@minecraft/server";

world.afterEvents.playerSpawn.subscribe((event) => {
    if (!event.initialSpawn) return;

    event.player.sendMessage(
        "§a[Elevator] Script loaded successfully!"
    );
});

console.warn("[Elevator] Script initialized.");
