// Interfaces common to the tridactyl project.

// For some obscure reason, tsc doesn't like .d.ts files to share a name with
// .ts files. So don't do that.

interface Number {
    mod(n: number): number
    clamp(lo: number, hi: number): number
}

// For content.ts
interface Message {
    type:
        "excmd_contentcommand" |
        "keydown" |
        "keydown_suppress" |
        "commandline" |
        "commandline_frame"
    // And other unknown attributes...
    [key: string]: any
}

declare var content: any

// Firefox-specific dom properties
interface Window {
    scrollByLines(n: number): void
    scrollByPages(n: number):  void
}
