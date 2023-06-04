import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <section>
      <h3>{title}</h3>
      <div>{children}</div>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
