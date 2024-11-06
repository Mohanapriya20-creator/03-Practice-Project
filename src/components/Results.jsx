import { calculateInvestmentResults,formatter } from '../util/investment.js'
export default function Results({ userInput }) {
    const resultData = calculateInvestmentResults(userInput);
    console.log(resultData)
    return <table id='result'>
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Intrest (year)</th>
                <th>Total Intrest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {resultData.map((data) => {
                return <tr key={data.year}>
                    <td>{data.year}</td>
                    <td>{formatter.format(data.valueEndOfYear)}</td>
                    <td>{formatter.format(data.interest)}</td>
                    <td>{formatter.format(data.valueEndOfYear - data.interest)}</td>
                    <td>{formatter.format(data.annualInvestment)}</td>
                </tr>
            })}
        </tbody>
    </table>
}