"use strict";
class sortAlgorithms {
    constructor(time) {
        this.list = document.querySelectorAll(".cell");
        this.size = this.list.length;
        this.time = time;
        this.help = new Helper(this.time, this.list);
    }

    
    BubbleSort = async () => {
        for(let i = 0 ; i < this.size - 1 ; ++i) {
            for(let j = 0 ; j < this.size - i - 1 ; ++j) {
                await this.help.mark(j);
                await this.help.mark(j+1);
                if(await this.help.compare(j, j+1)) {
                    await this.help.swap(j, j+1);
                }
                await this.help.unmark(j);
                await this.help.unmark(j+1);
            }
            this.list[this.size - i - 1].setAttribute("class", "cell done");
        }
        this.list[0].setAttribute("class", "cell done");
    }

    
    

    Partition = async (start, end) => {
        let pivot = this.list[end].getAttribute("value");
        let prev_index = start - 1;

        await this.help.markSpl(end);
        for(let c = start ; c < end ; ++c) {
            let currValue = Number(this.list[c].getAttribute("value"));
            await this.help.mark(c);
            if(currValue < pivot) {
                prev_index += 1;
                await this.help.mark(prev_index);
                await this.help.swap(c, prev_index);
                await this.help.unmark(prev_index);
            }
            await this.help.unmark(c);
        }
        await this.help.swap(prev_index+1, end);
        await this.help.unmark(end);
        return prev_index + 1;
    }
};