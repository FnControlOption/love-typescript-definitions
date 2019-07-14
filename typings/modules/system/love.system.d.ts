declare namespace love {

    /**
     * Provides access to information about the user's system.
     * @noSelf
     * @link [love.system](https://love2d.org/wiki/love.system)
     */
    export namespace system {
        /**
         * Gets text from the clipboard.
         *
         * @return text, The text currently held in the system's clipboard.
         * @link [love.system.getClipboardText](https://love2d.org/wiki/love.system.getClipboardText)
         */
        export function getClipboardText(): string;

        /**
         * Gets the current operating system. In general, LÖVE abstracts away the need to
         * know the current operating system, but there are a few cases where it can be
         * useful (especially in combination with os.execute.)
         *
         * @return osString, The current operating system. "OS X", "Windows", "Linux", "Android" or "iOS".
         * @link [love.system.getOS](https://love2d.org/wiki/love.system.getOS)
         */
        export function getOS(): string;

        /**
         * Gets information about the system's power supply.
         *
         * @return state, The basic state of the power supply.
         * @return percent, Percentage of battery life left, between 0 and 100. _nil/undefined_ if the value can't be determined or there's no battery.
         * @return seconds, Seconds of battery life left. _nil/undefined_ if the value can't be determined or there's no battery.
         * @tupleReturn
         * @link [love.system.getPowerInfo](https://love2d.org/wiki/love.system.getPowerInfo)
         */
        export function getPowerInfo(): [PowerState, number | undefined, number | undefined];

        /**
         * Gets the amount of logical processor in the system.
         *
         * @return processorCount, Amount of logical processors.
         * @link [love.system.getProcessorCount](https://love2d.org/wiki/love.system.getProcessorCount)
         */
        export function getProcessorCount(): number;

        /**
         * Gets whether another application on the system is playing music in the background.
         * @return backgroundmusic, True if the user is playing music in the background via another app, false otherwise.
         * @link [love.system.hasBackgroundMusic](https://love2d.org/wiki/love.system.hasBackgroundMusic)
         */
        export function hasBackgroundMusic(): boolean;

        /**
         * Opens a URL with the user's web or file browser.
         *
         * @param url The URL to open. Must be formatted as a proper URL.

To open a file or folder, "file://" must be prepended to the path.
         * @return success, Whether the URL was opened successfully.
         @link [love.system.openURL](https://love2d.org/wiki/love.system.openURL)
         */
        export function openURL(url: string): boolean;

        /**
         * Puts text in the clipboard.
         *
         * @param text The new text to hold in the system's clipboard.
         * @link [love.system.setClipboardText](https://love2d.org/wiki/love.system.setClipboardText)
         */
        export function setClipboardText(text: string): void;

        /**
         * Causes the device to vibrate, if possible. Currently this will only work on
         * Android and iOS devices that have a built-in vibration motor.
         *
         * @param seconds The duration to vibrate for. If called on an iOS device, it will always vibrate for 0.5 seconds due to limitations in the iOS system APIs.
         * @link [love.system.vibrate](https://love2d.org/wiki/love.system.vibrate)
         */
        export function vibrate(seconds?: number): void;

    }

}
