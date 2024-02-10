import './Styles.css'

const Statistics = ({ content }) => {
    const total = content.reduce((sum, part) => {
        return sum + part.exercises
    }, 0)

    return (
        <p class="bolded">
            total of {total} exercises
        </p>
    )
}

export default Statistics