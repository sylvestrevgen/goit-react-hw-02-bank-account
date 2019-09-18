import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({ onSubmitTransaction, onChange, inputValue }) => {
  return (
    <section className={styles.controls}>
      <input
        onChange={onChange}
        type="number"
        placeholder="Enter transaction amount..."
        className={styles.input}
        value={inputValue}
      />
      <button
        onClick={onSubmitTransaction}
        name="deposit"
        type="button"
        className={styles.button}
      >
        Deposit
      </button>
      <button
        onClick={onSubmitTransaction}
        name="withdrawal"
        type="button"
        className={styles.button}
      >
        Withdraw
      </button>
    </section>
  );
};

Controls.propTypes = {
  onSubmitTransaction: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  inputValue: PropTypes.number.isRequired,
};

export default Controls;
