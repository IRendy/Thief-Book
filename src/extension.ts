// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { commands, ExtensionContext, window } from 'vscode';
import * as book from './bookUtil';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "thief-book" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json

	let displayCode = commands.registerCommand('extension.displayCode', () => {

		let lauage_arr_list = [
			'Java - System.out.println("Hello World");',
			'C++ - cout << "Hello, world!" << endl;',
			'C - printf("Hello, World!");',
			'Python - print("Hello, World!")',
			'PHP - echo "Hello World!";',
			'Ruby - puts "Hello World!";',
			'Perl - print "Hello, World!";',
			'Lua - print("Hello World!")',
			'Scala - println("Hello, world!")',
			'Golang - fmt.Println("Hello, World!")'
		];

		var index = Math.floor((Math.random() * lauage_arr_list.length));
		window.setStatusBarMessage(lauage_arr_list[index]);
	});

	let getNextPage = commands.registerCommand('extension.getNextPage', () => {
		let books = new book.Book(context);
		window.setStatusBarMessage(books.getNextPage());
	});

	let getPreviousPage = commands.registerCommand('extension.getPreviousPage', () => {
		let books = new book.Book(context);
		window.setStatusBarMessage(books.getPreviousPage());
	});

	context.subscriptions.push(displayCode);
	context.subscriptions.push(getNextPage);
	context.subscriptions.push(getPreviousPage);
}

// this method is called when your extension is deactivated
export function deactivate() { }
