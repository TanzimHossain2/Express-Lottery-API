# Lottery API

-   sell lottery ticket
-   update lottery ticket
-   delete lottery ticket
-   get all ticket
-   get ticket by id
-   bulk buy (user can buy multiple ticket at a time)
-   raffle draw

## Ticket:
- number (unique),
- username
- price
- timestamp

## Routes:


- /tickets/t/:ticketId GET find single ticket
- /tickets/t/:ticketId PATCH update ticket by id
- /tickets/t/:ticketId DELETE delete ticket by id

- /tickets/u/:username GET find tickets for given user
- /tickets/u/:username PATCH update tickets for given user
- /tickets/u/:username DELETE delete all tickets for given user

- /tickets/sell -create tickets
- /tickets/bulk -bulk sell tickets
- /tickets/draw
- /tickets/  -find all tickets




