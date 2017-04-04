import React from "react";
import ReactDOM from "react-dom";
//import css from './style.css';
require('./style.css')

//TodoList组件是一个整体的组件，最终React也只渲染这个组件
//TodoList组件是两个组件的集合
var TodoList = React.createClass({
	render: function(){
		return(
				<div>
					<ListTodo />
				</div>
			);
	}
});

var ListTodo = React.createClass({
	getInitialState: function(){
		return{
			number: 0
		};
	},

	addContent: function(e){
		e.target.style.border = "2px solid #fa7d3c";
		this.refs.link.style.display = "none";
		this.refs.tip.style.display = "block";
	},

	handleBlur: function(e){
		e.target.style.border = "2px solid #cccccc";
		this.refs.link.style.display = "block";
		this.refs.tip.style.display = "none";
	},

	handleChange: function(e){
		this.setState({
			number: e.target.value.length
		});
	},

	render: function(){
		return(
		<div>
			<div className="title">
				<div ref="link">
					<a href="#">三生三世十里桃花</a>
				</div>
				<div className="tip" ref="tip">
					<span>{this.state.number<=140 ? '还可以输入' : '已超出'}<strong>{this.state.number<=140 ? 140-this.state.number : this.state.number-140}</strong>字</span>
				</div>
			</div>
			<form>
				<textarea onFocus={this.addContent} onBlur={this.handleBlur} onChange={this.handleChange}></textarea>
				<input type="submit" value="发布" className={this.state.number>0 && this.state.number<=140 ? 'submit' : 'disabled'} disabled={this.state.number>0 && this.state.number<=140 ? '' : 'disabled'} />
			</form>
		</div>
		);
	}
});

ReactDOM.render(
	<TodoList />,
	document.getElementById("example")
);
