const Part = ({ name, exercises }) => {
    console.log(name)
    return (
        <li>
            {name} {exercises}
        </li>
    )
}

export default Part