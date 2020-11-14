import React, {Component} from 'react'
import './Contador.css'

import Display from './Display'
import PassoForm from './PassoForm'
import Button from './Button'

export default class Contator extends Component {


    state = { //objeto com dois atributos, passo e valor
        passo: this.props.passo || 1, //pega os valores do elemento Contador no componente App, caso não tenha, atribui 1 como padrão
        valor: this.props.valor || 0
    }

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

    mudarPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso
        })
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <PassoForm passo={this.state.passo}
                    onPassoChance={this.mudarPasso}></PassoForm>
                <Display valor={this.state.valor}></Display>
                <Button onInc={this.inc} onDec={this.dec}></Button>
            </div>
        )
    }

}