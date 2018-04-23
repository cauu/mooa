import React, { Component } from 'react';

class SubPage extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const { children, ...others } = this.props;

    return (
      <div {...others}>
        测试子页面1
        {children}
      </div>
    );
  }
}

export default SubPage;