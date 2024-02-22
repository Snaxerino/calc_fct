$(document).ready(function () {

    /******************************************** Variaveis *********************************************/
    const parametros_fct = ['participacao','autonomia','responsabilidade','relacionamento','pertinencia','rigor','estruturacao','reflexao'];
    /* 1 - 11 ano | 2 - 12 ano*/
    const ano = [1, 2];
    const mostrar_erro = $("#alertToast");
    const msg_erro = $("#msg_erro");

    /************************************** Buscar valores aos inputs ***********************************/

    function buscarValores(parametros_fct) {
        // vai buscar os valores a todos os inputs
        let valores_array=[]

        // por cada ano [1,2] vai buscar o valor a partir do id usando o nome e ano
        ano.forEach((name)=>{
            let ano= name
            parametros_fct.forEach((name)=>
                valores_array.push(buscarValor(name,ano)))
        })

        return valores_array;
    }


    function buscarValor(val_name, ano){
        // # + 1 ou 2 + nome do
        const valor = parseInt($('#1' + ano + '_' + val_name).val());
        // validações do input
        if (isNaN(valor) === true) {
            return 0;
        }

        if (valor < 0 || valor > 200) {
            mostrar_msg_erro('Coloque um valor entre 0 e 200.')
            return 0;
        }
        return valor;
    }

    /************************************** Mostrar e fechar toast **************************************/
    function mostrar_msg_erro(msg) {
        // faz o popup aparecer com uma mensagem de erro
        mostrar_erro.css("display","block")
        msg_erro.text(msg)
    }

    $('#fechar_toast').click(function(){
        $('#alertToast').hide();
    });

    /********************* Aplicar as funcções a todos os inputs e o calculo final ***********************/
    function calc(val_array){
        val_array.forEach((index) => val_array[index]/1)
        const ano11= (val_array[0] + val_array[1] + val_array[2] + val_array[3]) / 4 * 0.8 + (val_array[4] + val_array[5] + val_array[6] + val_array[7])/4 * 0.2;
        const ano12= (val_array[8] + val_array[9] + val_array[10] + val_array[11]) / 4 * 0.8 + (val_array[12] + val_array[13] + val_array[14] + val_array[15])/4 * 0.2;
        $("#11ano").text(ano11.toFixed(1))
        $("#12ano").text(ano12.toFixed(1))
        $("#final").text((ano11 * 0.25 + ano12 * 0.75).toFixed(1))
    }

    ano.forEach((name) => {
        let ano = name
        parametros_fct.forEach((name)=>{
                $('#1' + ano + '_' + name ).on("input",function () {
                    // ir buscar os valores com a função buscarValores()
                    calc(buscarValores(parametros_fct))
                });
            });
        });
});