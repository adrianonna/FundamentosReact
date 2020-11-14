import React, {Component} from 'react'
import './Contador.css'

export default class Contator extends Component {


    state = { //objeto com dois atributos, passo e valor
        passo: this.props.passo || 1, //pega os valores do elemento Contador no componente App, caso não tenha, atribui 1 como padrão
        valor: this.props.valor || 0
    }

    //---Outra forma de fazer usando construtor---

    // constructor(props){
    //     super(props)
    //     this.state = {
    //         passo: props.passo,
    //         valor: 0
    //     }
    // }

    inc = () => {
        this.setState({ //passando um objeto no setState
            valor: this.state.valor + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            valor: this.state.valor - this.state.passo
        })
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <div>
                    <label for="passoInput">Passo: </label>
                    <input id="passoInput" type="number"
                        style={{fontSize: '1.4rem', width: '60px'}} //Mesma config de style no Contador.css
                        value={this.state.passo} //Está apenas atualizando(mostrando na tela) o value do input para o valor alterado no onChance
                        onChange={e => this.setState({passo: +e.target.value})}/> {/* Na mudança do input(onChange), o valor do evento(+ converte para numérico) é atribuido a passo pelo setState(bem parecido com o setState das funções inc e dec) */}  
                </div>

                <h4>Valor: {this.state.valor}</h4>  

                <div>
                    <button onClick={this.inc}>+</button>
                    <button onClick={this.dec}>-</button>
                </div>
            </div>
        )
    }

}