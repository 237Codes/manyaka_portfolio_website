# manyaka_portfolio_website

This is a document for my portfolio website. I will be documenting my progess here. You can find important notes about the various sections in this document.

Hosting : https://Vercel.com

# Things to note about the experience section

When creating the experience section, I decided to try out the react vertical component
and I noticed a few things

1- The vertical component is hidden by default. I first tried to set <VerticalTimelineElement visible={true}>.
This creates a new problem which does not allow me to do animations since I forced the timeline component to display
true, its display is always visible

# Project section

For the project section data, I used an array of objects.

To make the projects clickable so that I can redirect the user to another site, I will just need to wrap them in an anchor tag

# Contact me section

Using <input> tag for user email because it is a single line. For multiple lines of input, I would rather use a text area tag


I am using resend for the email. Resend is popular for emails made by the same team as React Email
https://resend.com/login?redirectedFrom=%2Foverview

Using "react hot toast" to customize the alert message that pops up on submit. Need to install the library in my project and import it into the necessary file to implement.

# Theme switch section

To keep track of the current theme when the user reloads or revisits the website, I am using windows.localStorage("theme", "dark") function

When I have a track of it, we need to get the theme when the page is about to display again
using use effect, then set the theme to the local theme if any exists

since we have to track this across multiple parts of the file, we can refactor it into a custom hook and just import it inside the different files

I can also keep track of the default theme on the users computer using media query
windows.matchMedia("(prefers-color0scheme: dark)").matches

# duplicate a line

shift + option + arrow down key
