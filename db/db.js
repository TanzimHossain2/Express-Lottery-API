const Ticket = require('../models/Ticket');

class MyDB {
    constructor() {
        this.tickets = [];
    }


    /**
     * create and save a new ticket
     * @param {string} username 
     * @param {number} price 
     * @returns {Ticket} return a new ticket object
     */
    create(username, price) {
        const ticket = new Ticket(username, price);
        this.tickets.push(ticket);
        return ticket;
    }


    /**
     * create multiple tickets for a single user
     * @param {string} username 
     * @param {number} price 
     * @param {number} quantity
     * @returns {Array<Ticket>} return an array of tickets 
     */
    bulkCreate(username, price, quantity) {
        const result = [];

        for (let i = 0; i < quantity; i++) {
            const ticket = this.create(username, price);
            result.push(ticket);
        }

        return result;
    }


    /**
     *  return all available tickets
     */
    find() {
        return this.tickets;
    }


    /**
     * find ticket by id
     * @param {string} ticketiId 
     * @returns {Ticket} 
     */
    findById(ticketiId) {
        const ticket = this.tickets.find(
            /**
             * @param {Ticket} ticket 
             * @returns 
             */
            (ticket) => ticket.id === ticketiId);

        return ticket;
    }


    /**
     * find all tickets by username
     * @param {string} username
     * @returns {Array<Ticket>} 
     */
    findByUsername(username) {
        const tickets = this.tickets.filter(
            /**
             * @param {Ticket} ticket 
             */
            (ticket) => ticket.username === username);

        return tickets;
    }

    /**
     * 
     * @param {string} username 
     * @param {{username: string, price:number}} ticketBody 
     * @returns {Array<Ticket>}
     */
    updateByUsername(username, ticketBody) {
        const tickets = this.findByUsername(username);
        tickets.forEach((ticket) => {
            ticket.username = ticketBody.username ?? ticket.username;
            ticket.price = ticketBody.price ?? ticket.price;
            ticket.updateAt = new Date();
        });

        return tickets;
    }





    /**
     * 
     * @param {string} ticketId 
     * @param {{username: string, price:number}} ticketBody
     * @returns {Ticket} 
     */
    updateById(ticketId, ticketBody) {
        const ticket = this.findById(ticketId);
        ticket.username = ticketBody.username ?? ticket.username;
        ticket.price = ticketBody.price ?? ticket.price;
        ticket.updateAt = new Date();

        return ticket;
    }


    /**
     * delete ticket from db
     * @param {string} ticketId 
     */
    deleteById(ticketId) {
        const index = this.tickets.findIndex((ticket) => ticket.id === ticketId);

        if (index !== -1) {
            this.tickets.splice(index, 1);
            return true;
        } else {
            return false;
        }
    }

    /**
     * delete all tickets by username
     * @param {string} username 
     */
    deleteByUsername(username) {
        const tickets = this.findByUsername(username);
        tickets.forEach((ticket) => {
            this.deleteById(ticket.id);
        });
    }






    /**
     * find winner tickets
     * @param {number} winnerCount
     * @returns {Array<Ticket>} 
     */
    draw(winnerCount) {
        let WinnerIndexs = new Array(winnerCount);

        let index = 0;

        while (index < winnerCount) {
            let winnerIndex = Math.floor(Math.random() * this.tickets.length);
          
            if (!WinnerIndexs.includes(winnerIndex)) {
                WinnerIndexs[index++] = winnerIndex;
                continue;
            }
        }




        
        const winners = WinnerIndexs.map((index) => this.tickets[index]);
        return winners;
    }
}

const myDB = new MyDB();

module.exports = myDB;