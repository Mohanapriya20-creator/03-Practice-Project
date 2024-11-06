import { useState } from "react"
export default function UserInput({onHandleChange,input}) {
    return (
        <section id='user-input'>
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input
                        type="number"
                        required
                        value={input.initialInvestment}
                        onChange={(event) => onHandleChange('initialInvestment', event.target.value)} />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input
                        type="number"
                        required
                        value={input.annualInvestment}
                        onChange={(event) => onHandleChange('annualInvestment', event.target.value)} />
                </p>
            </div>
            <div className="input-group"> 
                <p>
                    <label>Expected Return</label>
                    <input
                        type="number"
                        required
                        value={input.expectedReturn}
                        onChange={(event) => onHandleChange('expectedReturn', event.target.value)} />
                </p>
                <p>
                    <label>Years</label>
                    <input
                        type="number"
                        required
                        value={input.duration}
                        onChange={(event) => onHandleChange('duration', event.target.value)} />
                </p>
            </div>
        </section>
    )
}