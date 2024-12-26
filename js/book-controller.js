'use strict'

function onInit() {
    render()
}

/**
 * <tr>
        <td>The adventures of Lori Ipsi</td>
        <td>120</td>
        <td>
            <button> Read   </button> 
            <button> Update </button> 
            <button> Delete </button> 
        </td>
    </tr>
*/
/** <tr>
        <td>Kratos: The Atlas killer</td>
        <td>150</td>
        <td>
            <button> Read   </button> 
            <button> Update </button>
            <button> Delete </button>
        </td>
    </tr>
    <tr>
        <td>Zora: The Lost Hyrule Domain</td>
        <td>90</td>
        <td>
            <button> Read   </button> 
            <button> Update </button>
            <button> Delete </button>
        </td>
    </tr>
 */

function render() {
    const elBookTable = document.querySelector('.book-table')
    elBookTable.innerHTML += 
    `<tr>
        <td>${TheAdventuresOfLoriIpsi}</td>
        <td>${120}</td>
        <td>
            <button onclick="onRead(this)"> Read   </button> 
            <button onclick="onUpdate(this)"> Update </button> 
            <button onclick="onDelete(this)"> Delete </button> 
        </td>
    </tr>`
}