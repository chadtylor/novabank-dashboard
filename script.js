const navButtons =
  document.querySelectorAll(
    ".nav-button"
  );

const views =
  document.querySelectorAll(
    ".view"
  );

const pageTitle =
  document.getElementById(
    "pageTitle"
  );

const pageSubtitle =
  document.getElementById(
    "pageSubtitle"
  );

const totalBalance =
  document.getElementById(
    "totalBalance"
  );

const availableBalance =
  document.getElementById(
    "availableBalance"
  );

const monthlyChange =
  document.getElementById(
    "monthlyChange"
  );

const incomeValue =
  document.getElementById(
    "incomeValue"
  );

const spendingValue =
  document.getElementById(
    "spendingValue"
  );

const savingsValue =
  document.getElementById(
    "savingsValue"
  );

const recentTransactions =
  document.getElementById(
    "recentTransactions"
  );

const transactionTable =
  document.getElementById(
    "transactionTable"
  );

const transactionSearch =
  document.getElementById(
    "transactionSearch"
  );

const transactionFilter =
  document.getElementById(
    "transactionFilter"
  );

const ringTotal =
  document.getElementById(
    "ringTotal"
  );

const spendingRing =
  document.getElementById(
    "spendingRing"
  );

const categoryList =
  document.getElementById(
    "categoryList"
  );

const dashboardGoals =
  document.getElementById(
    "dashboardGoals"
  );

const savingsGrid =
  document.getElementById(
    "savingsGrid"
  );

const sendMoneyButton =
  document.getElementById(
    "sendMoneyButton"
  );

const quickSendButton =
  document.getElementById(
    "quickSendButton"
  );

const transactionSendButton =
  document.getElementById(
    "transactionSendButton"
  );

const quickIncomeButton =
  document.getElementById(
    "quickIncomeButton"
  );

const newGoalButton =
  document.getElementById(
    "newGoalButton"
  );

const quickAddSavingButton =
  document.getElementById(
    "quickAddSavingButton"
  );

const sendModal =
  document.getElementById(
    "sendModal"
  );

const incomeModal =
  document.getElementById(
    "incomeModal"
  );

const goalModal =
  document.getElementById(
    "goalModal"
  );

const savingDepositModal =
  document.getElementById(
    "savingDepositModal"
  );

const recipientInput =
  document.getElementById(
    "recipientInput"
  );

const sendAmountInput =
  document.getElementById(
    "sendAmountInput"
  );

const sendNoteInput =
  document.getElementById(
    "sendNoteInput"
  );

const confirmSendButton =
  document.getElementById(
    "confirmSendButton"
  );

const incomeNameInput =
  document.getElementById(
    "incomeNameInput"
  );

const incomeAmountInput =
  document.getElementById(
    "incomeAmountInput"
  );

const confirmIncomeButton =
  document.getElementById(
    "confirmIncomeButton"
  );

const goalNameInput =
  document.getElementById(
    "goalNameInput"
  );

const goalTargetInput =
  document.getElementById(
    "goalTargetInput"
  );

const confirmGoalButton =
  document.getElementById(
    "confirmGoalButton"
  );

const depositGoalTitle =
  document.getElementById(
    "depositGoalTitle"
  );

const savingDepositInput =
  document.getElementById(
    "savingDepositInput"
  );

const confirmSavingDeposit =
  document.getElementById(
    "confirmSavingDeposit"
  );

const toggleCardButton =
  document.getElementById(
    "toggleCardButton"
  );

const frozenOverlay =
  document.getElementById(
    "frozenOverlay"
  );

const onlineToggle =
  document.getElementById(
    "onlineToggle"
  );

const contactlessToggle =
  document.getElementById(
    "contactlessToggle"
  );

const internationalToggle =
  document.getElementById(
    "internationalToggle"
  );

const resetButton =
  document.getElementById(
    "resetButton"
  );

const toast =
  document.getElementById(
    "toast"
  );

const viewInfo = {
  dashboard: {
    title: "Dashboard",
    subtitle:
      "Your demo financial overview."
  },

  transactions: {
    title: "Transactions",
    subtitle:
      "Review your fictional account activity."
  },

  cards: {
    title: "Cards",
    subtitle:
      "Manage your demo virtual card."
  },

  savings: {
    title: "Savings",
    subtitle:
      "Track your fictional savings goals."
  }
};

const categoryIcons = {
  Income: "↓",
  Shopping: "🛍",
  Food: "☕",
  Transport: "🚆",
  Bills: "⌂",
  Transfer: "↗"
};

const categoryColours = {
  Shopping: "#7c6cff",
  Food: "#52d9e8",
  Transport: "#ffad66",
  Bills: "#ff6f8f",
  Transfer: "#8d96aa"
};

function defaultState() {
  return {
    balance: 5842.36,

    cardFrozen: false,

    cardSettings: {
      online: true,
      contactless: true,
      international: false
    },

    transactions: [
      {
        id: 1,
        name: "Salary",
        category: "Income",
        amount: 2450,
        date: "2026-09-20",
        note: "Monthly salary"
      },

      {
        id: 2,
        name: "The Coffee House",
        category: "Food",
        amount: -6.8,
        date: "2026-09-20",
        note: "Coffee"
      },

      {
        id: 3,
        name: "Urban Outfit",
        category: "Shopping",
        amount: -74.5,
        date: "2026-09-19",
        note: "Clothing"
      },

      {
        id: 4,
        name: "Northern Rail",
        category: "Transport",
        amount: -18.4,
        date: "2026-09-18",
        note: "Train"
      },

      {
        id: 5,
        name: "Nova Energy",
        category: "Bills",
        amount: -96.25,
        date: "2026-09-17",
        note: "Energy bill"
      },

      {
        id: 6,
        name: "Maya",
        category: "Transfer",
        amount: -35,
        date: "2026-09-16",
        note: "Dinner"
      },

      {
        id: 7,
        name: "Fresh Market",
        category: "Food",
        amount: -42.75,
        date: "2026-09-15",
        note: "Groceries"
      },

      {
        id: 8,
        name: "StreamBox",
        category: "Bills",
        amount: -12.99,
        date: "2026-09-14",
        note: "Subscription"
      }
    ],

    goals: [
      {
        id: 1,
        name: "Travel fund",
        icon: "✈",
        saved: 1260,
        target: 2500
      },

      {
        id: 2,
        name: "New laptop",
        icon: "▣",
        saved: 780,
        target: 1600
      },

      {
        id: 3,
        name: "Emergency fund",
        icon: "◇",
        saved: 3200,
        target: 5000
      }
    ]
  };
}

let state =
  loadState();

let selectedGoalId =
  null;

function loadState() {
  try {
    const saved =
      JSON.parse(
        localStorage.getItem(
          "novaBankDemo"
        )
      );

    if (saved) {
      return {
        ...defaultState(),
        ...saved
      };
    }
  } catch {
    localStorage.removeItem(
      "novaBankDemo"
    );
  }

  return defaultState();
}

function saveState() {
  localStorage.setItem(
    "novaBankDemo",
    JSON.stringify(state)
  );
}

function switchView(viewName) {
  navButtons.forEach(
    button => {
      button.classList.toggle(
        "active",
        button.dataset.view ===
          viewName
      );
    }
  );

  views.forEach(
    view => {
      view.classList.remove(
        "active-view"
      );
    }
  );

  document
    .getElementById(
      `${viewName}View`
    )
    .classList.add(
      "active-view"
    );

  pageTitle.textContent =
    viewInfo[viewName].title;

  pageSubtitle.textContent =
    viewInfo[viewName].subtitle;

  renderAll();
}

function getCurrentMonthTransactions() {
  const now =
    new Date();

  return state.transactions.filter(
    transaction => {
      const date =
        new Date(
          `${transaction.date}T12:00:00`
        );

      return (
        date.getMonth() ===
          now.getMonth() &&
        date.getFullYear() ===
          now.getFullYear()
      );
    }
  );
}

function calculateTotals() {
  const month =
    getCurrentMonthTransactions();

  const income =
    month
      .filter(
        transaction =>
          transaction.amount > 0
      )
      .reduce(
        (sum, transaction) =>
          sum +
          transaction.amount,
        0
      );

  const spending =
    Math.abs(
      month
        .filter(
          transaction =>
            transaction.amount < 0
        )
        .reduce(
          (sum, transaction) =>
            sum +
            transaction.amount,
          0
        )
    );

  const savings =
    state.goals.reduce(
      (sum, goal) =>
        sum +
        Number(goal.saved),
      0
    );

  return {
    income,
    spending,
    savings
  };
}

function renderOverview() {
  const totals =
    calculateTotals();

  totalBalance.textContent =
    money(state.balance);

  availableBalance.textContent =
    money(state.balance);

  incomeValue.textContent =
    money(totals.income);

  spendingValue.textContent =
    money(totals.spending);

  savingsValue.textContent =
    money(totals.savings);

  const difference =
    totals.income -
    totals.spending;

  monthlyChange.textContent =
    `${difference >= 0 ? "+" : "-"}${money(
      Math.abs(difference)
    )}`;

  monthlyChange.className =
    difference >= 0
      ? "amount-positive"
      : "amount-negative";
}

function transactionTemplate(
  transaction
) {
  const positive =
    transaction.amount > 0;

  return `
    <article class="transaction-item">
      <div class="transaction-icon">
        ${
          categoryIcons[
            transaction.category
          ] || "•"
        }
      </div>

      <div class="transaction-info">
        <strong>
          ${escapeHtml(
            transaction.name
          )}
        </strong>

        <span>
          ${escapeHtml(
            transaction.category
          )}
          ·
          ${escapeHtml(
            transaction.note
          )}
        </span>
      </div>

      <div class="transaction-amount">
        <strong class="${
          positive
            ? "amount-positive"
            : "amount-negative"
        }">
          ${
            positive
              ? "+"
              : "-"
          }${money(
            Math.abs(
              transaction.amount
            )
          )}
        </strong>

        <span>
          ${formatDate(
            transaction.date
          )}
        </span>
      </div>
    </article>
  `;
}

function renderRecentTransactions() {
  const sorted =
    state.transactions
      .slice()
      .sort(
        (a, b) =>
          b.date.localeCompare(
            a.date
          ) ||
          b.id - a.id
      )
      .slice(0, 6);

  recentTransactions.innerHTML =
    sorted
      .map(
        transactionTemplate
      )
      .join("");
}

function renderTransactions() {
  const search =
    transactionSearch.value
      .trim()
      .toLowerCase();

  const filter =
    transactionFilter.value;

  const filtered =
    state.transactions
      .slice()
      .sort(
        (a, b) =>
          b.date.localeCompare(
            a.date
          ) ||
          b.id - a.id
      )
      .filter(
        transaction => {
          const searchMatch =
            transaction.name
              .toLowerCase()
              .includes(search) ||
            transaction.note
              .toLowerCase()
              .includes(search) ||
            transaction.category
              .toLowerCase()
              .includes(search);

          const categoryMatch =
            filter === "all" ||
            transaction.category ===
              filter;

          return (
            searchMatch &&
            categoryMatch
          );
        }
      );

  if (
    filtered.length === 0
  ) {
    transactionTable.innerHTML = `
      <div class="empty-state">
        No matching transactions.
      </div>
    `;

    return;
  }

  transactionTable.innerHTML =
    filtered
      .map(
        transactionTemplate
      )
      .join("");
}

function renderSpending() {
  const month =
    getCurrentMonthTransactions();

  const spending =
    month.filter(
      transaction =>
        transaction.amount < 0
    );

  const categories = {};

  spending.forEach(
    transaction => {
      if (
        !categories[
          transaction.category
        ]
      ) {
        categories[
          transaction.category
        ] = 0;
      }

      categories[
        transaction.category
      ] +=
        Math.abs(
          transaction.amount
        );
    }
  );

  const total =
    Object.values(
      categories
    ).reduce(
      (sum, amount) =>
        sum + amount,
      0
    );

  ringTotal.textContent =
    money(total, 0);

  categoryList.innerHTML =
    "";

  const entries =
    Object.entries(
      categories
    ).sort(
      (a, b) =>
        b[1] - a[1]
    );

  if (
    entries.length === 0
  ) {
    categoryList.innerHTML = `
      <div class="empty-state">
        No spending yet.
      </div>
    `;

    spendingRing.style.background =
      "#252b39";

    return;
  }

  let currentDegree =
    0;

  const colourFallbacks = [
    "#7c6cff",
    "#52d9e8",
    "#ffad66",
    "#ff6f8f",
    "#8d96aa"
  ];

  const gradientParts =
    entries.map(
      (
        [category, amount],
        index
      ) => {
        const degrees =
          total === 0
            ? 0
            : (
                amount /
                total
              ) *
              360;

        const colour =
          categoryColours[
            category
          ] ||
          colourFallbacks[
            index %
            colourFallbacks.length
          ];

        const start =
          currentDegree;

        const end =
          currentDegree +
          degrees;

        currentDegree =
          end;

        return `${colour} ${start}deg ${end}deg`;
      }
    );

  spendingRing.style.background =
    `conic-gradient(${gradientParts.join(
      ","
    )})`;

  entries.forEach(
    (
      [category, amount],
      index
    ) => {
      const row =
        document.createElement(
          "div"
        );

      row.className =
        "category-row";

      const colour =
        categoryColours[
          category
        ] ||
        colourFallbacks[
          index %
          colourFallbacks.length
        ];

      row.innerHTML = `
        <span
          class="category-dot"
          style="background:${colour}"
        ></span>

        <span>
          ${escapeHtml(category)}
        </span>

        <strong>
          ${money(amount)}
        </strong>
      `;

      categoryList.appendChild(
        row
      );
    }
  );
}

function renderDashboardGoals() {
  dashboardGoals.innerHTML =
    "";

  state.goals
    .slice(0, 3)
    .forEach(
      goal => {
        const percent =
          calculateGoalPercent(
            goal
          );

        const card =
          document.createElement(
            "article"
          );

        card.className =
          "goal-card-mini";

        card.innerHTML = `
          <div class="goal-card-mini-top">
            <div>
              <strong>
                ${escapeHtml(goal.name)}
              </strong>

              <span>
                ${money(goal.saved)}
                of
                ${money(goal.target)}
              </span>
            </div>

            <strong>
              ${percent}%
            </strong>
          </div>

          <div class="progress-track">
            <div
              class="progress-fill"
              style="width:${percent}%"
            ></div>
          </div>
        `;

        dashboardGoals.appendChild(
          card
        );
      }
    );
}

function renderSavings() {
  savingsGrid.innerHTML =
    "";

  if (
    state.goals.length === 0
  ) {
    savingsGrid.innerHTML = `
      <div class="empty-state">
        Create your first savings goal.
      </div>
    `;

    return;
  }

  state.goals.forEach(
    goal => {
      const percent =
        calculateGoalPercent(
          goal
        );

      const card =
        document.createElement(
          "article"
        );

      card.className =
        "saving-card";

      card.innerHTML = `
        <div class="saving-icon-large">
          ${goal.icon || "◇"}
        </div>

        <h3>
          ${escapeHtml(goal.name)}
        </h3>

        <p>
          ${percent >= 100
            ? "Goal reached."
            : `${100 - percent}% remaining`}
        </p>

        <div class="saving-amount">
          <span>
            ${money(goal.saved)}
          </span>

          <strong>
            ${money(goal.target)}
          </strong>
        </div>

        <div class="progress-track">
          <div
            class="progress-fill"
            style="width:${percent}%"
          ></div>
        </div>

        <div class="saving-actions">
          <button
            data-add-goal="${goal.id}"
            type="button"
          >
            + Add money
          </button>

          <button
            data-delete-goal="${goal.id}"
            type="button"
          >
            Delete
          </button>
        </div>
      `;

      savingsGrid.appendChild(
        card
      );
    }
  );

  document
    .querySelectorAll(
      "[data-add-goal]"
    )
    .forEach(
      button => {
        button.addEventListener(
          "click",
          () => {
            openSavingDeposit(
              Number(
                button.dataset.addGoal
              )
            );
          }
        );
      }
    );

  document
    .querySelectorAll(
      "[data-delete-goal]"
    )
    .forEach(
      button => {
        button.addEventListener(
          "click",
          () => {
            deleteGoal(
              Number(
                button.dataset.deleteGoal
              )
            );
          }
        );
      }
    );
}

function calculateGoalPercent(
  goal
) {
  if (
    goal.target <= 0
  ) {
    return 0;
  }

  return Math.min(
    100,
    Math.round(
      (
        goal.saved /
        goal.target
      ) *
      100
    )
  );
}

function renderCardSettings() {
  frozenOverlay.classList.toggle(
    "hidden",
    !state.cardFrozen
  );

  toggleCardButton.textContent =
    state.cardFrozen
      ? "Unfreeze card"
      : "Freeze card";

  onlineToggle.checked =
    state.cardSettings.online;

  contactlessToggle.checked =
    state.cardSettings.contactless;

  internationalToggle.checked =
    state.cardSettings.international;
}

function sendMoney() {
  const recipient =
    recipientInput.value.trim();

  const amount =
    Number(
      sendAmountInput.value
    );

  const note =
    sendNoteInput.value.trim() ||
    "Transfer";

  if (
    !recipient ||
    amount <= 0
  ) {
    showToast(
      "Enter a recipient and valid amount."
    );

    return;
  }

  if (
    amount >
    state.balance
  ) {
    showToast(
      "Not enough demo balance."
    );

    return;
  }

  state.balance -=
    amount;

  state.transactions.unshift({
    id: Date.now(),
    name: recipient,
    category: "Transfer",
    amount:
      -amount,
    date:
      todayString(),
    note
  });

  recipientInput.value = "";
  sendAmountInput.value = "";
  sendNoteInput.value = "";

  saveState();

  closeModal(
    sendModal
  );

  renderAll();

  showToast(
    `Demo payment of ${money(
      amount
    )} sent to ${recipient}.`
  );
}

function addIncome() {
  const name =
    incomeNameInput.value.trim() ||
    "Income";

  const amount =
    Number(
      incomeAmountInput.value
    );

  if (
    amount <= 0
  ) {
    showToast(
      "Enter a valid amount."
    );

    return;
  }

  state.balance +=
    amount;

  state.transactions.unshift({
    id: Date.now(),
    name,
    category: "Income",
    amount,
    date:
      todayString(),
    note:
      "Demo income"
  });

  incomeNameInput.value = "";
  incomeAmountInput.value = "";

  saveState();

  closeModal(
    incomeModal
  );

  renderAll();

  showToast(
    `${money(
      amount
    )} added to your demo balance.`
  );
}

function createGoal() {
  const name =
    goalNameInput.value.trim();

  const target =
    Number(
      goalTargetInput.value
    );

  if (
    !name ||
    target <= 0
  ) {
    showToast(
      "Enter a goal name and target."
    );

    return;
  }

  const icons = [
    "◇",
    "✈",
    "▣",
    "⌂",
    "★"
  ];

  state.goals.push({
    id: Date.now(),
    name,
    icon:
      icons[
        state.goals.length %
        icons.length
      ],
    saved: 0,
    target
  });

  goalNameInput.value = "";
  goalTargetInput.value = "";

  saveState();

  closeModal(
    goalModal
  );

  renderAll();

  showToast(
    "Savings goal created."
  );
}

function openSavingDeposit(
  goalId
) {
  const goal =
    state.goals.find(
      item =>
        item.id === goalId
    );

  if (!goal) {
    return;
  }

  selectedGoalId =
    goalId;

  depositGoalTitle.textContent =
    `Add to ${goal.name}`;

  savingDepositInput.value = "";

  openModal(
    savingDepositModal
  );
}

function depositSavings() {
  const goal =
    state.goals.find(
      item =>
        item.id ===
        selectedGoalId
    );

  const amount =
    Number(
      savingDepositInput.value
    );

  if (
    !goal ||
    amount <= 0
  ) {
    showToast(
      "Enter a valid amount."
    );

    return;
  }

  if (
    amount >
    state.balance
  ) {
    showToast(
      "Not enough demo balance."
    );

    return;
  }

  goal.saved +=
    amount;

  state.balance -=
    amount;

  state.transactions.unshift({
    id: Date.now(),
    name:
      goal.name,
    category: "Transfer",
    amount:
      -amount,
    date:
      todayString(),
    note:
      "Moved to savings"
  });

  saveState();

  closeModal(
    savingDepositModal
  );

  renderAll();

  showToast(
    `${money(
      amount
    )} moved to ${goal.name}.`
  );
}

function deleteGoal(
  goalId
) {
  const goal =
    state.goals.find(
      item =>
        item.id === goalId
    );

  if (!goal) {
    return;
  }

  const confirmed =
    window.confirm(
      `Delete the demo goal "${goal.name}"? Saved money will return to your demo balance.`
    );

  if (!confirmed) {
    return;
  }

  state.balance +=
    Number(
      goal.saved
    );

  state.goals =
    state.goals.filter(
      item =>
        item.id !==
        goalId
    );

  saveState();
  renderAll();

  showToast(
    "Goal deleted and demo savings returned."
  );
}

function toggleCardFreeze() {
  state.cardFrozen =
    !state.cardFrozen;

  saveState();

  renderCardSettings();

  showToast(
    state.cardFrozen
      ? "Demo card frozen."
      : "Demo card unfrozen."
  );
}

function updateCardSettings() {
  state.cardSettings = {
    online:
      onlineToggle.checked,

    contactless:
      contactlessToggle.checked,

    international:
      internationalToggle.checked
  };

  saveState();

  showToast(
    "Demo card settings updated."
  );
}

function resetDemo() {
  const confirmed =
    window.confirm(
      "Reset all NovaBank demo data?"
    );

  if (!confirmed) {
    return;
  }

  localStorage.removeItem(
    "novaBankDemo"
  );

  state =
    defaultState();

  transactionSearch.value = "";
  transactionFilter.value =
    "all";

  switchView(
    "dashboard"
  );

  renderAll();

  showToast(
    "Demo banking data reset."
  );
}

function openModal(modal) {
  modal.classList.remove(
    "hidden"
  );
}

function closeModal(modal) {
  modal.classList.add(
    "hidden"
  );
}

function todayString() {
  return new Date()
    .toISOString()
    .split("T")[0];
}

function money(
  value,
  decimals = 2
) {
  return new Intl.NumberFormat(
    "en-GB",
    {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits:
        decimals,
      maximumFractionDigits:
        decimals
    }
  ).format(
    Number(value) || 0
  );
}

function formatDate(value) {
  const date =
    new Date(
      `${value}T12:00:00`
    );

  return date.toLocaleDateString(
    "en-GB",
    {
      day: "numeric",
      month: "short"
    }
  );
}

function escapeHtml(value) {
  const div =
    document.createElement(
      "div"
    );

  div.textContent =
    String(value);

  return div.innerHTML;
}

function showToast(message) {
  toast.textContent =
    message;

  toast.classList.add(
    "show"
  );

  clearTimeout(
    showToast.timeout
  );

  showToast.timeout =
    setTimeout(
      () => {
        toast.classList.remove(
          "show"
        );
      },
      2200
    );
}

function renderAll() {
  renderOverview();
  renderRecentTransactions();
  renderTransactions();
  renderSpending();
  renderDashboardGoals();
  renderSavings();
  renderCardSettings();
}

navButtons.forEach(
  button => {
    button.addEventListener(
      "click",
      () => {
        switchView(
          button.dataset.view
        );
      }
    );
  }
);

document
  .querySelectorAll(
    "[data-jump]"
  )
  .forEach(
    button => {
      button.addEventListener(
        "click",
        () => {
          switchView(
            button.dataset.jump
          );
        }
      );
    }
  );

[
  sendMoneyButton,
  quickSendButton,
  transactionSendButton
].forEach(
  button => {
    button.addEventListener(
      "click",
      () => {
        openModal(
          sendModal
        );
      }
    );
  }
);

quickIncomeButton.addEventListener(
  "click",
  () => {
    openModal(
      incomeModal
    );
  }
);

newGoalButton.addEventListener(
  "click",
  () => {
    openModal(
      goalModal
    );
  }
);

quickAddSavingButton.addEventListener(
  "click",
  () => {
    if (
      state.goals.length === 0
    ) {
      openModal(
        goalModal
      );

      return;
    }

    openSavingDeposit(
      state.goals[0].id
    );
  }
);

confirmSendButton.addEventListener(
  "click",
  sendMoney
);

confirmIncomeButton.addEventListener(
  "click",
  addIncome
);

confirmGoalButton.addEventListener(
  "click",
  createGoal
);

confirmSavingDeposit.addEventListener(
  "click",
  depositSavings
);

transactionSearch.addEventListener(
  "input",
  renderTransactions
);

transactionFilter.addEventListener(
  "change",
  renderTransactions
);

toggleCardButton.addEventListener(
  "click",
  toggleCardFreeze
);

[
  onlineToggle,
  contactlessToggle,
  internationalToggle
].forEach(
  toggle => {
    toggle.addEventListener(
      "change",
      updateCardSettings
    );
  }
);

document
  .querySelectorAll(
    "[data-close]"
  )
  .forEach(
    button => {
      button.addEventListener(
        "click",
        () => {
          closeModal(
            document.getElementById(
              button.dataset.close
            )
          );
        }
      );
    }
  );

[
  sendModal,
  incomeModal,
  goalModal,
  savingDepositModal
].forEach(
  modal => {
    modal.addEventListener(
      "click",
      event => {
        if (
          event.target === modal
        ) {
          closeModal(
            modal
          );
        }
      }
    );
  }
);

resetButton.addEventListener(
  "click",
  resetDemo
);

renderAll();