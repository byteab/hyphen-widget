// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useCallback, useState } from "react";

export default function useModal() {
  const [isVisible, setIsVisible] = useState(false);

  const showModal = () => setIsVisible(true);
  const hideModal = () => setIsVisible(false);

  return { isVisible, showModal, hideModal };
}
