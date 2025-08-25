function List({ items, category="category" }) {

    // Sorting examples:
    // items.sort((a, b) => a.name.localeCompare(b.name)); // alphabetical
    // items.sort((a, b) => b.name.localeCompare(a.name)); // reverse alphabetical
    // items.sort((a, b) => a.calories - b.calories); // numeric ascending
    // items.sort((a, b) => b.calories - a.calories); // numeric descending

    // Filtering example:
    // const items = props.items.filter(item => item.calories < 100);

    const listItems = items.map(fruit => (
        <li key={fruit.id}>
            {fruit.name}: &nbsp;<b>{fruit.calories}</b>
        </li>
    ));
   

    return<> 
        <h3 className="list-category">{category}</h3>
        <ol className="list-items">{listItems}</ol>
      
    </>;
}

export default List;
