import { Button, Menu, Modal, Tooltip } from 'antd';
import { ClickParam } from 'antd/lib/menu';
import i18next from 'i18next';
import React, { Component } from 'react';
import { Flex } from '../flex';
import { ShortcutHelp } from '../help';
import Icon from '../icon/Icon';

interface IProps {
	onChangeEditor: (param: ClickParam) => void;
	currentEditor: string;
}

class Title extends Component<IProps> {
	state = {
		visible: false,
	};

	// componentDidMount() {
	// 	if (globalThis) {
	// 		(globalThis.adsbygoogle = globalThis.adsbygoogle || []).push({});
	// 	}
	// }

	handlers = {
		goGithub: () => {
			window.open('https://github.com/salgum1114/react-design-editor');
		},
		goDocs: () => {
			window.open('https://salgum1114.github.io/react-design-editor/docs');
		},
		showHelp: () => {
			this.setState({
				visible: true,
			});
		},
	};

	render() {
		const { visible } = this.state;
		return (
			<Flex
				style={{ background: 'white', position: 'relative'}}
				flexWrap="wrap"
				flex="1"
				alignItems="center"
			>
				<Flex style={{ marginLeft: 20, marginTop: 15, position: 'absolute' }} flex="0 1 auto">
					<span style={{ color: '#000', fontFamily: 'Apercu Pro', fontSize: 24, fontWeight: 500 }}>Chronovis Paintbox</span>
					
				</Flex>
				<Flex style={{ right: 20, marginLeft: 88, marginTop: 10, position: 'absolute' }}>
					{/* <Tooltip title={i18next.t('action.go-github')} overlayStyle={{ fontSize: 16 }}>*/}
					<Button
							className="rde-action-btn"
							style={{
								color: 'black',
							}}
							onClick={this.handlers.goGithub}
						>
							<span style={{ textDecorationLine: "underline", color: '#000', fontFamily: 'Arco Perpetuo', fontSize: 14, fontWeight: 150 }}>About</span>

							{/* <Icon name="github" prefix="fab" size={1.5} /> */}
						</Button>
					{/* </Tooltip>
					<Tooltip title={i18next.t('action.go-docs')} overlayStyle={{ fontSize: 16 }}>*/}
						<Button
							className="rde-action-btn"
							style={{
								color: 'black',
							}}
							onClick={this.handlers.goDocs}
						>							
							<span style={{ textDecorationLine: "underline", color: '#000', fontFamily: 'Arco Perpetuo', fontSize: 14, fontWeight: 150 }}>Docs</span>

							{/* <Icon name="book" prefix="fas" size={1.5} /> */}
						</Button>
					{/* </Tooltip>
					<Tooltip title={i18next.t('action.shortcut-help')} overlayStyle={{ fontSize: 16 }}>*/}
						<Button
							className="rde-action-btn"
							style={{
								color: 'white',
							}}
							//onClick={this.handlers.showHelp}
						>
							<span style={{ textDecorationLine: "underline", color: '#000', fontFamily: 'Arco Perpetuo', fontSize: 14, fontWeight: 150 }}>Save</span>

							{/* <Icon name="question" prefix="fas" size={1.5} /> */}
						</Button>
						<Button
							className="rde-action-btn"
							style={{
								color: 'white',
							}}
							//onClick={this.handlers.showHelp}
						>
							<span style={{ textDecorationLine: "underline", color: '#000', fontFamily: 'Arco Perpetuo', fontSize: 14, fontWeight: 150 }}>Settings</span>

							{/* <Icon name="question" prefix="fas" size={1.5} /> */}
						</Button>
					{/* </Tooltip> */}
				</Flex>
				{/* <Modal
					visible={visible}
					onCancel={() => this.setState({ visible: false })}
					closable={true}
					footer={null}
					width="80%"
				>
					<ShortcutHelp />
				</Modal> */}
			</Flex>
		);
	}
}

export default Title;
