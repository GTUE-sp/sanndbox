
$(() => {
    console.log("hello")
    const students = ["青山 采未", "新井　草太", "上野　元気","青山 采未", "新井　草太", "上野　元気","青山 采未", "新井　草太", "上野　元気","青山 采未", "新井　草太", "上野　元気", "青山 采未", "新井　草太", "上野　元気","青山 采未", "新井　草太", "上野　元気", "青山 采未", "新井　草太", "上野　元気","青山 采未", "新井　草太", "上野　元気", "青山 采未", "新井　草太", "上野　元気","青山 采未", "新井　草太", "上野　元気", "青山 采未", "新井　草太", "上野　元気","青山 采未", "新井　草太", "上野　元気",   ];

    const $body = $("table > tbody");
    students.forEach((student, index) => {
        $body.append(`
        <tr>
        <td>${index+1}</td>
        <td>${student}</td>
        <td><button >欠</button></td>
        <td><button>備</button></td>
        <td>❌</td>
        <td>❌</td>
        <td>❌</td>
        <td>⭕️</td>
        <td>⭕️</td>
        <td>⭕️</td>
        <td>⭕️</td>
        <td>⭕️</td>
        <td>⭕️</td>
        </tr>`);
    });

});