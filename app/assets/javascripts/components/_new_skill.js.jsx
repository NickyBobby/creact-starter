var NewSkill = React.createClass({

  handleClick() {
    var name = this.refs.name.value;
    var details = this.refs.details.value;

    $.ajax({
      url: '/api/v1/skills',
      type: 'POST',
      data: { skill: { name: name, details: details, level: 'halfbad' } },
      success: (skill) => {
        this.props.handleSubmit(skill);
        $('.skill-name').val('');
        $('.skill-details').val('');
      }
    });
  },

  render() {
    return (
      <div>
        <input className='skill-name' ref='name' placeholder='Enter name of skill' />
        <input className='skill-details' ref='details' placeholder='Details' />
        <button onClick={this.handleClick}>Submit</button>
      </div>
    );
  }
});
