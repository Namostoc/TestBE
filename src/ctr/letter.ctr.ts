class Letters {
    public async letters(body: any): Promise<any> {
        const input = body.number
        const letters = ['ก', 'ข', 'ฃ', 'ค', 'ฅ', 'ฆ', 'ง', 'จ', 'ฉ', 'ช', 'ซ', 'ฌ', 'ญ', 'ฎ', 'ฏ', 'ฐ', 'ฑ', 'ฒ', 'ณ', 'ด'
            , 'ต', 'ถ', 'ท', 'ธ', 'น', 'บ', 'ป', 'ผ', 'ฝ', 'พ', 'ฟ', 'ภ', 'ม', 'ย', 'ร', 'ล', 'ว', 'ศ', 'ษ', 'ส', 'ห', 'ฬ', 'อ', 'ฮ',
        'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

        if (!input) {
            return {
                data: 'require letters'
            }
        }

        if (input.length === 0) {
            return {
                data: 'data is empty'
            }
        }

        let arr = []
        let count = 0
        let string = ''
        let count2 = 0
        for (let i = 0; i < letters.length; i++) {
            count++
            if (input === count) {
                arr.push(letters[i])
                count2++
                arr.push(letters[i])
                count2++
                
            }else if (count2 >= 1){
                arr.push(letters[i])
            }
        }
        console.log('arr ===', arr);
        console.log('count2 ===', count2);
        



        // Duplicate even
        // let count = 0
        // let countletter = 0
        // let stirng = ''
        // let arr = []

        // for(let i = 0 ; i < Thailetters.length; i++){
        //     countletter++
        //     arr.push(Thailetters[i])
        //     if(countletter % 2 === 0){
        //         arr.push(Thailetters[i])
        //     }
        // }
        // console.log('arr ===', arr);
        // console.log('count === ', countletter);


        // let string = ''
        // let missing = []
        // let num = []
        // for(let i = 0 ; i< input.length; i++){
        //     if(input[i] === ""){
        //         let empty = input[0] + (((i + 1) - 1)*1)
        //         missing.push(empty)
        //         console.log(input[i-1]);
        //         console.log('i ====', i);

        //         // console.log(input.length);


        //     }
        //     if(input[i] !== ""){
        //         num.push(input[i])
        //     }




        //     string += `${missing}`


        // }
        // console.log('num ===', num);

        // console.log('missing ====', missing);

        // const concat = num.concat(missing)
        // console.log('concat ===', concat);

        // const sort = concat.sort()




        return {
            data: arr
        }
    }
}

export default Letters