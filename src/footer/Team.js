function Team() {
  const names = [
    {
      title: 'Alice',
      id: 'id1',
      phone: '+1 222 333 44 55'
    },
    {
      title: 'Bob',
      id: 'id2',
      phone: '+1 222 333 44 65'
    },
    {
      title: 'Misha',
      id: 'id3',
      phone: '+1 222 333 44 44'
    },
    {
      title: 'Petr',
      id: 'id4',
      phone: '+1 222 333 44 45'
    },
  ]
  return <div>
    {names.map(el => <li key={el.id}>{el.title} {el.phone}</li>)}
  </div>
}

export default Team;