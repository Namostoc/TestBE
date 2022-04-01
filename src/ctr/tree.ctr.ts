class Tree {
    public async maketree(body: any): Promise<any> {
        const inputnumber: Number = body.number

        if (!inputnumber) {
            return {
                data: "require Number Data"
            }
        }

        if (inputnumber === 0) {
            return {
                data: "Data can not be 0"
            }
        }

        if (typeof inputnumber !== 'number') {
            return {
                data: "Data need to be Number"
            }
        }

        let txt = ''
        let arr = []
        for (let i = 0; i <= inputnumber; i++) {

            txt += ''
         

            for (let j = i - 1; j < inputnumber; j++) {
                txt += ' '
              

            }
            for (let k = 0; k < (2 * i) + 1; k++) {
                txt += '*'
               

                // console.log('i ====', i);


            }
            txt += '\n'




        }
        if (inputnumber > 1) {
            if (inputnumber === 2) {
                for (let h = 0; h <= inputnumber; h++) {
                    txt += ' '
                   
                }
                txt += '*'
                

            } else {
                for (let h = 0; h <= 1; h++) {
                    for (let e = h; e < inputnumber + 1; e++) {
                        txt += ' '
                        
                    }
                    for (let k = 0; k < (h * 2) + 1; k++) {
                        txt += '*'
                        
                    }
                    txt += '\n'
                    
                }


            }
        }
        console.log(txt);





        return txt
    }
}

export default Tree