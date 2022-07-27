<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Echo v.s. Print</title>
    <style>
        table,
        th,
        td {
            border: 1px solid black;
            border-collapse: collapse;
            padding: 5px;
        }
    </style>
</head>

<body>
    <h1>Echo v.s. Print</h1>

    <br><br>
    <h2>Echo Statement</h2>
    <p>
        Echo is a statement which is newer than print <br>
        It is considered faster than print function and can output few values at once <br>
        Because it is a statement parenthesis are not allowed.
    </p>

    <b>Examples:</b> <br>
    <ul>
        <li>echo "hello", "other value", 45, true</li>
        <li>echo "hello"</li>
        <li>echo 45</li>
        <li>echo true</li>
    </ul>

    <br><br>
    <h2>Print Function</h2>
    <p>
        Print is a function which doesn't require parenthesis. <br>
        Print can only output one value at a time, and returns 1 on successful output.
    </p>

    <b>Examples:</b> <br>
    <ul>
        <li>print "hello" ==> returns 1</li>
        <li>print 2.2 ==> returns 1</li>
        <li>print("hello") ==> returns 1</li>
        <li>print(23.4) ==> returns 1</li>
    </ul>

    <br><br>
    <h2>Print V.S. Echo</h2>
    <table>
        <thead>
            <th>
                Echo
            </th>
            <th>
                Print
            </th>
        </thead>
        <tbody>
            <tr>
                <td>Is a statement</td>
                <td>Is a function</td>
            </tr>
            <tr>
                <td>Newer</td>
                <td>Older</td>
            </tr>
            <tr>
                <td>Faster</td>
                <td>Slower</td>
            </tr>
            <tr>
                <td>Outputs one or more values</td>
                <td>Outputs only one value</td>
            </tr>
            <tr>
                <td> - </td>
                <td>Returns 1 on success</td>
            </tr>
            <tr>
                <td>Parenthesis are not allowed</td>
                <td>Parenthesis can be used or not</td>
            </tr>
        </tbody>
    </table>
</body>

</html>