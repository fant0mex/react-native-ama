export type Rule =
  | 'BOTTOM_SHEET_CLOSE_ACTION'
  | 'CONTRAST_FAILED'
  | 'CONTRAST_FAILED_AAA'
  | 'FLATLIST_NO_COUNT_IN_PLURAL_MESSAGE'
  | 'FLATLIST_NO_COUNT_IN_SINGULAR_MESSAGE'
  | 'MINIMUM_SIZE'
  | 'NO_ACCESSIBILITY_LABEL'
  | 'NO_ACCESSIBILITY_ROLE'
  | 'NO_FORM_ERROR'
  | 'NO_FORM_LABEL'
  | 'NO_KEYBOARD_TRAP'
  | 'NO_UNDEFINED'
  | 'UPPERCASE_ACCESSIBILITY_LABEL'
  | 'UPPERCASE_TEXT_NO_ACCESSIBILITY_LABEL';

export type RuleAction = 'SHOULD_NOT' | 'MUST_NOT' | 'MUST' | 'SHOULD';

export const NON_OVERRIDABLE_RULES: Partial<Rule>[] = [
  'NO_ACCESSIBILITY_ROLE',
  'NO_ACCESSIBILITY_LABEL',
  'NO_KEYBOARD_TRAP',
  'NO_UNDEFINED',
  'NO_FORM_LABEL',
  'FLATLIST_NO_COUNT_IN_PLURAL_MESSAGE',
  'BOTTOM_SHEET_CLOSE_ACTION',
];

export const LOGGER_RULES: Record<Rule, RuleAction> = {
  CONTRAST_FAILED: 'MUST',
  CONTRAST_FAILED_AAA: 'SHOULD',
  FLATLIST_NO_COUNT_IN_SINGULAR_MESSAGE: 'SHOULD',
  FLATLIST_NO_COUNT_IN_PLURAL_MESSAGE: 'MUST',
  MINIMUM_SIZE: 'MUST',
  NO_ACCESSIBILITY_LABEL: 'MUST',
  NO_ACCESSIBILITY_ROLE: 'MUST',
  NO_FORM_LABEL: 'MUST',
  NO_FORM_ERROR: 'MUST',
  NO_KEYBOARD_TRAP: 'MUST_NOT',
  NO_UNDEFINED: 'MUST_NOT',
  UPPERCASE_TEXT_NO_ACCESSIBILITY_LABEL: 'MUST_NOT',
  UPPERCASE_ACCESSIBILITY_LABEL: 'MUST_NOT',
  BOTTOM_SHEET_CLOSE_ACTION: 'MUST',
};

export const CONTRAST_CHECKER_MAX_DEPTH = 5;
export const IGNORE_CONTRAST_FOR_DISABLED_ELEMENTS = false;

export const RULES_HELP: Record<Rule, string> = {
  NO_UNDEFINED: '',
  CONTRAST_FAILED:
    'https://formidable.com/open-source/react-native-ama/docs/guidelines/contrast',
  CONTRAST_FAILED_AAA:
    'https://formidable.com/open-source/react-native-ama/docs/guidelines/contrast',
  MINIMUM_SIZE:
    'https://formidable.com/open-source/react-native-ama/docs/guidelines/minimum-size',
  UPPERCASE_TEXT_NO_ACCESSIBILITY_LABEL:
    'https://formidable.com/open-source/react-native-ama/docs/guidelines/uppercase-text',
  UPPERCASE_ACCESSIBILITY_LABEL:
    'https://formidable.com/open-source/react-native-ama/docs/guidelines/uppercase-text',
  NO_ACCESSIBILITY_LABEL:
    'https://formidable.com/open-source/react-native-ama/docs/guidelines/accessibility-labels',
  NO_ACCESSIBILITY_ROLE:
    'https://formidable.com/open-source/react-native-ama/docs/guidelines/accessibility-role',
  NO_KEYBOARD_TRAP:
    'https://formidable.com/open-source/react-native-ama/docs/guidelines/forms',
  NO_FORM_LABEL:
    'https://formidable.com/open-source/react-native-ama/docs/guidelines/forms',
  NO_FORM_ERROR:
    'https://formidable.com/open-source/react-native-ama/docs/guidelines/forms',
  FLATLIST_NO_COUNT_IN_SINGULAR_MESSAGE:
    'https://formidable.com/open-source/react-native-ama/docs/guidelines/lists',
  FLATLIST_NO_COUNT_IN_PLURAL_MESSAGE:
    'https://formidable.com/open-source/react-native-ama/docs/guidelines/lists',
  BOTTOM_SHEET_CLOSE_ACTION:
    'https://formidable.com/open-source/react-native-ama/docs/guidelines/bottomsheet',
};

export const canRuleBeOverridden = (rule: Rule) => {
  return !NON_OVERRIDABLE_RULES.includes(rule);
};

export const SHELL_COLORS = {
  RED: '\x1b[31m',
  YELLOW: '\x1b[33m',
  RESET: '\x1b[0m',
  BLUE: '\x1b[36m',
  BG_RED: '\x1b[41m',
};
